/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

const {
    map
} = require("core-js/fn/array");

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    //map空间复杂度较高
    // const map = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //     if ((i + 1 - (map.get(nums[i]) || -Infinity)) <= k) {
    //         return true;
    //     } else {
    //         map.set(nums[i], i + 1)
    //         if (map.size > k) {
    //             map.delete(nums[i - k])
    //         }
    //     }
    // }
    // return false;

    // 滑动窗口
    let right = nums.length - 1;
    let left = 0;
    while (right > 0) {
        left = Math.max((right - k), 0);
        while (left < right) {
            if (nums[right] === nums[left]) return true;
            left++;
        }
        right--;
    }
    return false;
};
// @lc code=end