/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    const res = []
    // 转换成26进制，因为是从1开始的，所以每次转换之前要先减1
    while (columnNumber) {
        --columnNumber;
        res.push(String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt()))
        columnNumber = Math.floor(columnNumber / 26)
    }
    return res.reverse().join('')
};
// @lc code=end