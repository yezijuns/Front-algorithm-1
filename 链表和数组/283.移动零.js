/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let slow = 0
  let fast = 0
  while (fast<nums.length) {
    if (nums[fast]) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
    //   let tmp = nums[slow]
    //   nums[slow] = nums[fast]
    //   nums[fast] = tmp
      slow ++
    }
    fast ++
  }
  return nums
};
// @lc code=end

