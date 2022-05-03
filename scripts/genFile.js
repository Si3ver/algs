"use strict";
const fs = require("fs");
const rawData = require("../data/leetcode.js");
const { templateCode, templateTest } = require('../data/template.js')
const { log, isFileExist, writeFile, getCodeFilePath, getTestFilePath, deleteFile } = require("./utils.js");

function getFnByIndex(index) {
  for (const part of rawData) {
    const { relative_path = "" } = part;
    const { problems = [] } = part || {};
    for (const problem of problems) {
      if (problem.index === index) {
        return {
          relative_path,
          ...problem,
        };
      }
    }
  }
  return {};
}

// __main__
(function __main__() {

  /** 第一个参数输入题号 */
  if (process.argv.length <= 2) {
    throw new Error("请输入 LeetCode 题号！");
  }
  const problemIndex = Number(process.argv[2]);
  log(`你选择的题号: ${problemIndex}`);

  /** 第二个参数是 del/delete 代表删除 */
  let isDel = false
  if (process.argv.length === 4 && ['del', 'delete'].includes(process.argv[3])) {
    isDel = true
    log('文件生成中...')
  } else {
    log('文件删除中...')
  }

  /** 搜索题号所对应的 函数名称 和 路径前缀 */
  const { fn = "", relative_path = "" } = getFnByIndex(problemIndex);
  log(`函数名称: ${fn}, 路径前缀: ${relative_path}`);
  if (!fn) {
    throw new Error('没有找到对应的题号，请先在 data/leetcode.js 中添加')
  }

  /** 获取文件路径 */
  const codeFilePath = getCodeFilePath(relative_path, problemIndex, fn);
  const isCodeFileExist = isFileExist(codeFilePath)
  // log(`源码文件: ${codeFilePath}, ${isCodeFileExist ? '已存在' : '不存在'}`);

  const testFilePath = getTestFilePath(relative_path, problemIndex, fn);
  const isTestFileExist = isFileExist(testFilePath)
  // log(`单测文件: ${testFilePath}, ${isTestFileExist ? '已存在' : '不存在'}`);


  if (isDel) {
    // 执行删除
    deleteFile(codeFilePath, isCodeFileExist)
    deleteFile(testFilePath, isTestFileExist)
  } else {
    // 执行新增
    if (isCodeFileExist) {
      console.error(`文件 ${codeFilePath} 已存在！`)
    } else {
      writeFile(codeFilePath, templateCode(fn))
    }

    if (isTestFileExist) {
      console.error(`文件 ${testFilePath} 已存在！`)
    } else {
      writeFile(testFilePath, templateTest(fn, problemIndex))
    }
  }
})();
