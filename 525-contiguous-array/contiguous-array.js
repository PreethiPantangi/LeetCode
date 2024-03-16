/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let count = 0;
    let map = new Map();
    let maxLength = 0;
    map.set(0, -1);
    for(let i = 0; i < nums.length; i++) {
        count = count + ((nums[i] === 0) ? -1 : 1);
        if(map.has(count)) {
            maxLength = Math.max(maxLength, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }
    return maxLength;
};