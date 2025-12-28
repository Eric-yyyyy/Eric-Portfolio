const { execSync } = require("child_process");

function runInherit(cmd, opts = {}) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: "inherit", shell: true, ...opts });
}

function runPipe(cmd, opts = {}) {
  console.log(`\n$ ${cmd}`);
  return execSync(cmd, { stdio: "pipe", encoding: "utf8", shell: true, ...opts });
}

function safePipe(cmd) {
  try {
    return runPipe(cmd).trim();
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
  } catch {
    console.error("\n❌ git-lfs is NOT available in this Vercel build environment.");
    process.exit(1);
  }

  // 2) 确保 origin 正常
  const REPO = "https://github.com/Eric-yyyyy/Eric-Portfolio.git";
  const originUrl = safePipe("git config --get remote.origin.url");

  if (!originUrl || originUrl === '""') {
    console.log("\n⚠️ origin url missing/empty. Setting origin to:", REPO);
    runInherit(`git remote add origin ${REPO} || true`);
  }
  runInherit(`git remote set-url origin ${REPO} || true`);

  // 3) 输出 .lfsconfig（如果存在，常常是元凶）
  console.log("\n--- DEBUG: .lfsconfig ---");
  runInherit("ls -la .lfsconfig || true");
  runInherit("cat .lfsconfig || true");

  // 4) 清理潜在坏配置
  runInherit("git config --local --unset-all lfs.url || true");
  runInherit("git config --local --unset-all remote.origin.lfsurl || true");
  runInherit("git config --local --unset-all remote.origin.lfspushurl || true");

  // 5) 初始化 LFS
  runInherit("git lfs install --local");

  console.log("\n--- DEBUG: git lfs env (before pull) ---");
  runInherit("git lfs env || true");

  // ✅ 6) 关键：pull 时用 git -c 强制指定 endpoint（绕过任何空配置）
  const LFS_ENDPOINT = `${REPO}/info/lfs`;
  runInherit(`git -c lfs.url=${LFS_ENDPOINT} lfs pull`);

  console.log("\n✅ Git LFS pull completed successfully.");
} catch (err) {
  console.error("\n❌ vercel-lfs.js failed.");

  // 输出更多信息（不依赖 grep）
  try {
    console.log("\n--- DEBUG: git remote -v (on error) ---");
    runInherit("git remote -v || true");

    console.log("\n--- DEBUG: git config --show-origin -l (filtered lfs) ---");
    const cfg = safePipe("git config --show-origin -l || true");
    const lines = cfg
      .split("\n")
      .filter((l) => l.toLowerCase().includes("lfs"))
      .join("\n");
    console.log(lines || "(no lfs-related config lines)");

    console.log("\n--- DEBUG: git lfs env (on error) ---");
    runInherit("git lfs env || true");
  } catch {}

  process.exit(1);
}
