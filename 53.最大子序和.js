/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let ans = nums[0],
        max = 0;
    nums.forEach(e => {
        max = Math.max(e + max, e);
        ans = Math.max(ans, max);
    })
    return ans
};
// @lc code=end

// [1, 2, 3, 1, -4, 1, -3, 4, -1, 2, 1, -5, 4]