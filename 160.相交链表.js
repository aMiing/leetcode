/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // Map方法，空间复杂度高
    // let curA = headA,
    //     curB = headB;
    // const map = new Map();
    // while (curA) {
    //     map.set(curA, curA);
    //     curA = curA.next;
    // }

    // while (curB) {
    //     if (map.get(curB)) {
    //         return curB
    //     }
    //     curB = curB.next;
    // }
    // return null;

    // 双指针方法
    // 时间复杂度O（n）; 空间复杂度O（1）
    // 不想交最后返回null; 遍历次数刚好m+n
    // 如果链表长度一致，第一轮就会相交；长度不一致,第二轮相交
    if (headA === null || headB === null) return null;
    let pA = headA,
        pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};
// @lc code=end