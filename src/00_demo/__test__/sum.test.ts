import sum from '../sum'

describe('sum', () => {
  it('1 plus 1 should be 2', () => {
    expect(sum(1, 2)).toBe(3);
  })

  it('5 plus 8 should be 13', () => {
    expect(sum(5, 8)).toBe(13);
  })

  // it('a plus b should be ab', () => {
  //   expect(sum('a', 'b')).toBe('ab');
  // })
})
