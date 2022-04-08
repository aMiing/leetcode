/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // return haystack.indexOf(needle)
    const len = needle.length;
    if (!len) return 0;
    if (haystack.length < len) return -1;
    for (let i = 0; i < haystack.length; i++) {
        const e = haystack[i];
        if (e === needle[0]) {
            if (haystack.slice(i, i + len) === needle) {
                return i
            }
        }
    }
    return -1
};
// @lc code=end