/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var maxMin = function (m) {
    if (m >= Math.pow(2, 31) || m < -Math.pow(2, 31)) {
        return 0
    } else return m;
}
var reverse = function (x) {
    x = maxMin(x)
    if (x < 0) {
        x = -((-x).toString().split('').reverse().join(''))
    } else {
        x = x.toString().split('').reverse().join('')
    }
    return maxMin(parseInt(x))

};
// @lc code=end