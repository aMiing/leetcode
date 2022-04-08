/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 双指针求解
    // let slow = 0,
    //     fast = 1;
    // nums.sort((a, b) => a - b)
    // while (fast - slow <= (nums.length >>> 1)) {
    //     if (nums[slow] !== nums[fast]) {
    //         slow++;
    //         fast++;
    //     } else {
    //         fast++;
    //     }
    // }
    // return nums[slow]

    // 排序之后中心元素一定是目标值
    nums.sort((a, b) => a - b)
    return nums[nums.length >>> 1]
};
// @lc code=end