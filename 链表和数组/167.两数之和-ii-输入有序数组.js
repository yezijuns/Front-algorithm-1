/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let right = numbers.length - 1
  let left = 0
  while (left <= right) {
    let sum = numbers[right]+numbers[left] 
    if (sum===target) {
      return [left+1, right+1] 
    } else if (sum < target) {
      left ++
    } else {
      right --
    }
  }
  
};
// @lc code=end

