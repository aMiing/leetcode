/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {

    const res = []
    // var inorderTraversal = function (root) {
    //     if (!root) return res;
    //     res.push(root.val);
    //     inorderTraversal(root.left, res);
    //     inorderTraversal(root.right, res);
    // };
    // inorderTraversal(root)

    // 堆栈遍历求解
    const stackLoop = (root) => {
        if (!root) return res;
        const stack = [root];
        let cur = null;
        while (stack.length) {
            cur = stack.pop()
            res.push(cur.val);
            cur.right && stack.push(cur.right)
            cur.left && stack.push(cur.left)
        }
    }
    stackLoop(root)
    return res;
};
// @lc code=end