/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针，两端向中间，移动值小的指针
var maxArea = function (height) {
    let low = 0,
        high = height.length - 1;
    let area = 0;
    while (low < high) {
        area = Math.max(area, (high - low) * Math.min(height[low], height[high]))
        if (height[low] < height[high]) {
            low++;
        } else {
            high--;
        }
    }
    return area;
};
// @lc code=end