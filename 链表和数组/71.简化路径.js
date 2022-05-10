/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let statck = []
  let paths = path.split('/')
  for (let i=0; i<paths.length; i++) {
    const p = paths[i]
    if(p=='..'){
      statck.pop()
    }else if (p && p!=='.'){
      statck.push(p)
    }
  }
  return '/'+statck.join('/')
};
// @lc code=end

