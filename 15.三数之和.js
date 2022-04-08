/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        let l = i + 1,
            r = nums.length - 1;
        if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                while (nums[l] == nums[l + 1]) l++; // 去重
                while (nums[r] == nums[r - 1]) r--; // 去重
                r--;
                l++;
            } else if (nums[i] + nums[l] + nums[r] > 0) {
                r--;
            } else {
                l++;
            }
        }
    }
    return res;
};
// @lc code=end
