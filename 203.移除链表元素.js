/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    const newHead = new ListNode(null, head);
    let node = newHead;
    while (node && node.next) {
        if (node.next.val === val) {
            node.next = node.next.next
        } else {
            node = node.next;
        }
    }
    return newHead.next
};
// @lc code=end