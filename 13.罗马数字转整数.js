/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let susplay = 0,
        count = 0;
    for (let i = 0; i < s.length - 1; i++) {
        const ele = s[i];
        count += map[ele]
        const next = s[i + 1]
        if (map[ele] < map[next]) {
            susplay += map[ele] * 2
        }
    }
    return count + map[s[s.length - 1]] - susplay

};
// @lc code=end