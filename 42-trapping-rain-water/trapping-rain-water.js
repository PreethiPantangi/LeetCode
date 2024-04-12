/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0;
    let leftMax = height[0];
    let sum = 0;
    let j = height.length-1;
    let rightMax = height[j];
    while(i < j) {
        if(leftMax <= rightMax) {
            sum += leftMax - height[i];
            i += 1;
            leftMax = Math.max(leftMax, height[i]);
        } else {
            sum += rightMax - height[j];
            j -= 1;
            rightMax = Math.max(rightMax, height[j]);
        }
    }
    return sum;
};