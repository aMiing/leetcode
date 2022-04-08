/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    // 数字太大，超出js数字范围
    // let multiple = 1;
    // while (n > 1) {
    //     multiple *= n;
    //     n--;
    // }
    // let res = 0;
    // while (!(multiple % 10)) {
    //     ++res;
    //     multiple = multiple / 10;
    // }
    // return multiple;

    // 0的个数和5的个数一致
    let res = 0;
    while (n > 1) {
        n = Math.floor(n / 5);
        res += n;

    }
    return res;
};
// @lc code=end