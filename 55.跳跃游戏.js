/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 贪心求解，只需要计算每一个元素能到达的最大下标位置，超过数组长度则返回true
var canJump = function (nums) {
    let jump = nums[0];
    let p = 0;
    while (p < nums.length) {
        if (jump >= nums.length - 1) return true;
        if (p <= jump) {
            jump = Math.max(jump, nums[p] + p);
        } else {
            return false;
        }
        p++;
    }
    return true;
};
// canJump([3, 0, 8, 2, 0, 0, 1])
// @lc code=end