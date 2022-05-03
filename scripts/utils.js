const fs = require("fs");

const { log } = console;

function isFileExist(filePath) {
  return fs.existsSync(filePath);
}

function writeFile(filePath, str) {
  fs.writeFileSync(filePath, str);
  log(`✅ 写入文件 ${filePath} 成功`);
}

/**
 * 源代码文件路径：./src/ + prefix + index + fn + .ts
 */
function getCodeFilePath(prefix, index, fn) {
  return fn
    ? `./src/${prefix}/${String(index).padStart(4, "0")}${fn}.ts`
    : "";
}

module.exports = {
  isFileExist,
  writeFile,
  getCodeFilePath,
  log,
};
