/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  let ret = []
  if (!root) {
    return ret
  }
  let queue = [root]
  while (queue.length) {
    let len = queue.length
    let max = queue[0].val
    while (len --) {
      let node = queue.shift()
      if (node.val > max) {
        max = node.val
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    ret.push(max)
  }
  return ret
};
// @lc code=end

