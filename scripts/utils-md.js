/** 生成 markdown 语法 - 表格行 */
function genMdTableLine(array) {
  return `| ${array.join(' | ')} |\n`
}

module.exports = {
  genMdTableLine,
}
