/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var getNext = function (n) {
    let sum = 0;
    while (n > 0) {
        const d = n % 10;
        n = Math.floor(n / 10)
        sum += d * d;
    }
    return sum;
}
var isHappy = function (n) {
    // 双指针：龟兔赛跑
    let slow = n,
        fast = getNext(n);
    while (fast !== slow && fast !== 1) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));

    }
    return fast === 1
};
// @lc code=end