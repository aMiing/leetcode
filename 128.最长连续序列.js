/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length < 2) return nums.length;
    nums.sort((a, b) => a - b);
    let max = 1;
    let len = 1;
    for (let i = 1; i < nums.length; i++) {
        const e = nums[i];
        const p = nums[i - 1];
        if (e - p === 1) {
            len++;
        } else if (e - p > 1) {
            max = Math.max(max, len);
            len = 1;
        }
    }
    max = Math.max(max, len);
    return max;
};
// @lc code=end
