/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const n = gas.length;
    let index = 0,
        sum_last = 0,
        sum_pre = 0;
    for (let i = 0; i < n; i++) {
        sum_last += gas[i] - cost[i];
        if (sum_last < 0) {
            index = i + 1;
            sum_pre += sum_last;
            sum_last = 0;
        }

    }
    return (sum_last + sum_pre) >= 0 ? index : -1;
};
// @lc code=end