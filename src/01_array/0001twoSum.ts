export default function twoSum (nums: number[], target: number): number[] {
  const m = new Map()
  for (let i = 0; i < nums.length; ++i) {
    const gap = target - nums[i]
    if (m.has(nums[i])) {
      return [m.get(nums[i]), i]
    } else {
      m.set(gap, i)
    }
  }
  return []
}
