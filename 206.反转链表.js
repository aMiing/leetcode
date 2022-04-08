/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    // 迭代方法
    // let cur = head;
    // let pre = null;
    // while (cur) {
    //     const next = cur.next;
    //     cur.next = pre;
    //     pre = cur;
    //     cur = next;
    // }
    // return pre;

    // 递归方法
    // 递归终止条件
    if (head === null || head.next === null) {
        return head;
    }
    // 递
    const p = reverseList(head.next);
    // 归
    head.next.next = head;
    head.next = null;
    // 返回值
    return p;


};
// @lc code=end