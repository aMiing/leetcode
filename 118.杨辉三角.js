/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) return [
        [1]
    ]
    const res = [
        [1]
    ]
    for (let i = 1; i < numRows; i++) {
        const row = []
        for (let j = 0; j <= i; j++) {
            const left = res[i - 1][j - 1] || 0
            const right = res[i - 1][j] || 0

            row.push(left + right)

        }

        res.push(row)

    }
    return res;

};
// @lc code=end