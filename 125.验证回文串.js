/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().match(/[a-z]|[0-9]/g)
    if (!s || s.length === 1) return true;
    const mid = s.length >>> 1;
    // 数组操作空间占用率较高
    // return s.slice(0, mid).join('') === s.slice(-mid).reverse().join('')
    for (let i = 0; i < mid; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
// @lc code=end