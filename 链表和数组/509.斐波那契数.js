/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

function helper(mon, n) {
  if (n<=1) {
    return n;
  }
  if (mon[n]) {
    return mon[n]
  }
  mon[n] = helper(mon, n-1) + helper(mon, n-2)
  return mon[n]
}

var fib = function(n) {
  let mon = []
  return helper(mon, n)
//   let dp = [0, 1]
//   for (let i=2; i<=n; i++) {
//     dp[i] = dp[i-1] +dp[i-2]
//   }
//   return dp[n]
};
// @lc code=end

