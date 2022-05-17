/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head==null) {
    return null
  }

  let fast = head
  let slow = head

  while (fast!==null) {
    slow = slow.next
    if (fast.next!==null) {
      fast = fast.next.next
    } else {
      return null
    }
    if (fast===slow) {
      let cur = head
      while (cur!==slow) {
        cur = cur.next
        slow = slow.next
      }
      return cur
    }
  }
  return null
};
// @lc code=end

