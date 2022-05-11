/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let statck = []
  let obj = {
    '(':')',
    '[':']',
    '{':'}'
  }
  for(let i=0; i<s.length; i++) {
    let ele = s[i]
    if (ele in obj) {
      statck.push(ele)
    } else {
      if (ele!=obj[statck.pop()]) {
          return false
      }
    }
  }
  return !statck.length
};
// @lc code=end

