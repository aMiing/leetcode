/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    if (!nums.length % 2) return false;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i = i + 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
    return false;
};
// @lc code=end