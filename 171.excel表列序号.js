/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let number = 0,
        multiple = 1;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        const e = columnTitle[i];
        const k = (e.charCodeAt() - 'A'.charCodeAt()) + 1;
        number += k * multiple;
        multiple *= 26;
    }
    return number;
};
// @lc code=end