/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 在从前往后遍历的过程中，记录能够跳到最远的位置，
// 在跳到最原位置的过程中，继续更新在这个范围内有没有能跳到的更远位置
// 有的话就更新jump的起跳位置
// 知道结束
var jump = function(nums) {
    let maxPos = 0;
    let end = 0;
    let step = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxPos = Math.max(maxPos, i + nums[i]);
        if(i === end) {
            end = maxPos;
            step++;
        }
    }
    return step;
};
// @lc code=end

