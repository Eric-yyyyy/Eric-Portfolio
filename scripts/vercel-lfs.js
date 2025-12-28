const { execSync } = require("child_process");

function run(cmd, opts = {}) {
  console.log(`\n$ ${cmd}`);
  return execSync(cmd, { stdio: "pipe", encoding: "utf8", ...opts });
}

function runInherit(cmd) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

function safe(cmd) {
  try {
    return run(cmd).trim();
  } catch {
    return "";
  }
}

try {
  runInherit("git --version");

  // 0) 打印 remote，便于诊断
  console.log("\n--- DEBUG: git remote -v (before) ---");
  runInherit("git remote -v || true");

  // 1) 检查 git-lfs 是否存在
  try {
    runInherit("git lfs version");
  } catch (e) {
    console.error("\n❌ git-lfs is NOT available in this Vercel build environment.");
    process.exit(1);
  }

  // 2) 确保 origin 正常（Vercel 有时没有标准 origin 或 URL 异常）
  const REPO = "https://github.com/Eric-yyyyy/Eric-Portfolio.git";
  const originUrl = safe("git config --get remote.origin.url");

  if (!originUrl || originUrl === '""') {
    console.log("\n⚠️ origin url missing/empty. Setting origin to:", REPO);
    // origin 不存在就 add，存在就 set-url
    execSync(`git remote add origin ${REPO}`, { stdio: "ignore" });
  }
  runInherit(`git remote set-url origin ${REPO} || true`);

  // 3) 清理潜在的坏 LFS 配置（空值会导致 missing protocol）
  runInherit("git config --local --unset-all lfs.url || true");
  runInherit("git config --local --unset-all remote.origin.lfsurl || true");
  runInherit("git config --local --unset-all remote.origin.lfspushurl || true");

  // 4) 写死正确的 LFS endpoint（避免推导失败）
  runInherit(`git config --local lfs.url ${REPO}/info/lfs`);

  // 5) 初始化并拉取 LFS 文件
  runInherit("git lfs install --local");

  console.log("\n--- DEBUG: git lfs env (before pull) ---");
  runInherit("git lfs env || true");

  runInherit("git lfs pull");

  console.log("\n✅ Git LFS pull completed successfully.");
} catch (err) {
  console.error("\n❌ vercel-lfs.js failed.");

  // 尽量多打点信息，方便你看 Vercel 日志定位
  try {
    console.log("\n--- DEBUG: git remote -v (on error) ---");
    execSync("git remote -v || true", { stdio: "inherit" });
    console.log("\n--- DEBUG: git config -l | (lfs) (on error) ---");
    execSync("git config -l | sort | (grep lfs || true)", { stdio: "inherit", shell: true });
    console.log("\n--- DEBUG: git lfs env (on error) ---");
    execSync("git lfs env || true", { stdio: "inherit" });
  } catch {}
  process.exit(1);
}
