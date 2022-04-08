/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const mp = new Map();
    mp.set(0, 1);
    let pre = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        pre += nums[i];
        // 因为是将之前元素的相加和为k,所以这里要先判断，再计算下一次的pre
        if (mp.get(pre - k)) {
            res += mp.get(pre - k);
        }

        if (mp.has(pre)) {
            mp.set(pre, mp.get(pre) + 1);
        } else {
            mp.set(pre, 1);
        }
    }
    return res;
};
// @lc code=end
