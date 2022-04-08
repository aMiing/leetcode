/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // 双指针法
    const newArr = []
    let i = 0,
        j = 0;
    while (i < m || j < n) {
        if (i === m) newArr.push(nums2[j++])
        else if (j === n) newArr.push(nums1[i++])
        else if (nums1[i] <= nums2[j]) {
            newArr.push(nums1[i++])
        } else {
            newArr.push(nums2[j++])
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        nums1[i] = newArr[i];
    }
    // sort排序法
    // nums1.splice(m, nums1.length - m, ...nums2);
    // nums1.sort((a, b) => a - b);
};
// @lc code=end