const fs = require("fs");

const { log } = console;

function isFileExist(filePath) {
  const ret = fs.existsSync(filePath);
  // log(filePath, ret)
  return ret
}

function writeFile(filePath, str) {
  fs.writeFileSync(filePath, str);
  log(`✅ 写入文件 ${filePath} 成功`);
}

/**
 * 源代码文件路径：./src/ + prefix + '/' + index + fn + .ts
 */
function getCodeFilePath(prefix, index, fn) {
  return fn
    ? `./src/${prefix}/${String(index).padStart(4, "0")}${fn}.ts`
    : "";
}

/**
 * 单测文件路径：./src/ + prefix + '/__test__/' + index + fn + .test.ts
 */
function getTestFilePath(prefix, index, fn) {
  return fn
    ? `./src/${prefix}/__test__/${String(index).padStart(4, "0")}${fn}.test.ts`
    : "";
}

module.exports = {
  isFileExist,
  writeFile,
  getCodeFilePath,
  getTestFilePath,
  log,
};
