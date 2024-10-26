/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length;
    prefixMax = new Array(len).fill(0);
    prefixMax[0] = height[0];
    suffixMax = new Array(len).fill(0);
    suffixMax[len - 1] = height[len - 1];

    for(let i = 1; i < len; i++) {
        prefixMax[i] = Math.max(prefixMax[i-1], height[i]);
    }
    for(let i = len-2; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i+1], height[i]);
    }
    
    let totalWater = 0;
    for(let i = 0; i < len; i++) {
        totalWater += Math.min(prefixMax[i], suffixMax[i]) - height[i];
    }
    return totalWater;
};