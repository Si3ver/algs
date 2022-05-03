function templateCode(fn) {
  return `export default function ${fn} () {\n\n}\n`;
}

function templateTest(fn, index) {
  return `import ${fn} from '../${String(index).padStart(4, '0')}${fn}'

describe('${fn}', () => {
  it('basic test 1', () => {

  })
})
`;
}

module.exports = { templateCode, templateTest };
