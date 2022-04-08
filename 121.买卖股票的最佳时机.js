/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Infinity;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        const ele = prices[i];
        if (ele < minPrice) {
            minPrice = ele;
        } else if (ele - minPrice > max) {
            max = ele - minPrice
        }
    }
    return max;

};
// @lc code=end