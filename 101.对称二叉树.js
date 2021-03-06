/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const compareLR = (l, r) => {
        if (l == null && r == null) return true;
        else if (l == null || r == null) return false;
        else if (l.val !== r.val) return false;
        else return compareLR(l.left, r.right) && compareLR(l.right, r.left);
    }
    if (root == null) return true;
    else {
        return compareLR(root.left, root.right)
    }
};
// @lc code=end