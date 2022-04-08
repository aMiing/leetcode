/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
const compareStr = function (len, strs) {
    for (let i = 0; i < strs.length - 1; i++) {
        const e = strs[i];
        const n = strs[i + 1]
        if (e.slice(0, len) !== n.slice(0, len)) {
            return false
        }
    }
    return true;
}
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0]
    const minLen = (strs.map(e => e.length)).sort()[0]
    if (!minLen) return ""
    for (let i = 1; i <= minLen; i++) {
        if (!compareStr(i, strs)) {
            return strs[0].slice(0, i - 1)
        }
    }
    return strs[0].slice(0, minLen)
};
// @lc code=end