/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] === nums[i - 1]) nums.splice(i, 1)
    }
};

// var removeDuplicates = function(nums) {
//     const n = nums.length;
//     if (n === 0) {
//         return 0;
//     }
//     let fast = 1, slow = 1;
//     while (fast < n) {
//         if (nums[fast] !== nums[fast - 1]) {
//             nums[slow] = nums[fast];
//             ++slow;
//         }
//         ++fast;
//     }
//     return slow;
// };
// @lc code=end