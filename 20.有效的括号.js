/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * 1、个数为偶数
 * 2、左括号和右括号个数相等
 * 3、一对括号中包含的括号必须成对出现
 */
var isValid = function (s) {
    if (s.length % 2) return false;
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const stk = []
    for (let i = 0; i < s.length; i++) {
        const ele = s[i];
        if (map[ele]) {
            if (map[ele] === stk[stk.length - 1]) stk.pop()
            else return false;
        } else {
            stk.push(ele)
        }
    }
    return !stk.length
};
// @lc code=end