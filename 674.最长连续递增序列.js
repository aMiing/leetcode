/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let maxLen = 1;
    let len = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            len++;
        } else {
            maxLen = Math.max(maxLen, len);
            len = 1;
        }
    }
    maxLen = Math.max(maxLen, len);
    return maxLen;
};
// @lc code=end
