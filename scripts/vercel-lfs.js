const { execSync } = require("child_process");

function run(cmd) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

try {
  run("git --version");

  // 1. 检查 git-lfs 是否存在
  try {
    run("git lfs version");
  } catch (e) {
    console.error("\n❌ git-lfs is NOT available in this Vercel build environment.");
    console.error("Vercel checked out only LFS pointer files, not real media.");
    process.exit(1);
  }

  // 2. 初始化并拉取 LFS 文件
  run("git lfs install --local");
  run("git lfs pull");

  console.log("\n✅ Git LFS pull completed successfully.");
} catch (err) {
  console.error("\n❌ vercel-lfs.js failed.");
  process.exit(1);
}
