/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
// 动态规划法 + 二分法
var maxEnvelopes = function (envelopes) {
    // 按照宽度正序，高度逆序排列
    envelopes.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    // console.log('sort', envelopes);
    const f = [envelopes[0][1]]; // 存储递增的h列表
    for (let i = 1; i < envelopes.length; ++i) {
        const num = envelopes[i][1];
        if (num > f.at(-1)) {
            f.push(num);
        } else {
            // 二分查找，为num在f中锚定一个位置，并替换掉该位置上的数字
            const index = binarySearch(f, num);
            f[index] = num;
            // if(!f.at(-2) || num > f.at(-2)) {
            //     f[f.length - 1] = num;
            // }else {
            //     f[f.length - 2] = num;
            // }
        }
    }
    console.log("f", f);
    return f.length;
};

function binarySearch(list, target) {
    let low = 0,
        high = list.length - 1;
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low;
        if (list[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}
// @lc code=end
