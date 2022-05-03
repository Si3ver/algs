import twoSum from '../0001twoSum'

describe('01twoSum', () => {
  it('basic test 1', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    expect(twoSum(nums, target)).toEqual([0, 1]);
  })
  
  it('basic test 2', () => {
    const nums = [3, 2, 4]
    const target = 6
    expect(twoSum(nums, target)).toEqual([1, 2]);
  })

  it('no match 1', () => {
    const nums = [2, 7, 11, 15]
    const target = 10
    expect(twoSum(nums, target)).toEqual([]);
  })
})
