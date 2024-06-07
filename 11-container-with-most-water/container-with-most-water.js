/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1; 
    let capacity = 0;
    while(left < right) {
        let width = right - left;
        let h = Math.min(height[left], height[right]);
        capacity = Math.max(capacity, width * h);
        if(height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return capacity;
};