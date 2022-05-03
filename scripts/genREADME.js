"use strict";
const fs = require("fs");
const rawData = require("../data/leetcode.js");
const { isFileExist, writeFile, getCodeFilePath, getTestFilePath } = require("./utils.js");
const { genMdTableLine } = require("./utils-md.js");

function genMdSection(sec) {
  const { title = "", relative_path = "", problems = [] } = sec;
  let partTitle = `## ${title}\n\n`;

  const tableHeaders = ["序号", "题目", "解法", "单测", "🔗"];
  let mdTable = "";
  if (problems.length > 0) {
    // 表头
    mdTable += genMdTableLine(tableHeaders);
    mdTable += genMdTableLine("-".repeat(tableHeaders.length).split(""));

    problems.forEach(({ index = 0, name = "", fn = "", url_cn = "" }) => {
      // 题解源文件
      const codeFilePath = getCodeFilePath(relative_path, index, fn);
      const mdCodeFileLink = fn ? `[${fn}](${codeFilePath})` : "";
      const isCodeFileExist = isFileExist(codeFilePath);

      // 单测源文件
      const testFilePath = getTestFilePath(relative_path, index, fn);
      const mdTestFileLink = fn ? `[${fn}](${testFilePath})` : "";
      const isTestFileExist = isFileExist(testFilePath);

      const line = genMdTableLine([
        index,
        name,
        isCodeFileExist ? mdCodeFileLink : fn,
        isTestFileExist ? mdTestFileLink : fn,
        url_cn ? `[🔗](${url_cn})` : "",
      ]);
      mdTable += line;
    });
  }
  return partTitle + mdTable;
}

// __main__
(function __main__() {
  let article = "# 数据结构与算法训练\n\n\n";
  rawData.forEach((sec) => {
    const mdSection = genMdSection(sec);
    article += `${mdSection}\n\n\n`;
  });
  writeFile("README.md", article);
})();
