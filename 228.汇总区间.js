/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let p = 0;
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            temp.push(p === i ? nums[p].toString() : nums[p] + '->' + nums[i])
            p = i + 1;
        }
    }
    return temp;
};
// summaryRanges([0, 1, 2, 4, 5, 7])
// @lc code=end