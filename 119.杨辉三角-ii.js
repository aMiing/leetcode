/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let pre = [1];
    for (let i = 1; i <= rowIndex; i++) {
        const row = []
        for (let j = 0; j <= i; j++) {
            const left = pre[j - 1] || 0;
            const right = pre[j] || 0;
            row.push(left + right)
        }
        pre = row
    }
    return pre
};
// @lc code=end