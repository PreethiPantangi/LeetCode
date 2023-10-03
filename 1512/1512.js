/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let dict = new Map();
    for (let i = 0; i < nums.length; i++) {
        if(dict.has(nums[i])) {
            dict.set(nums[i], dict.get(nums[i]) + 1);
        } else {
            dict.set(nums[i], 1);
        }
    }
    let count = 0;
    for (const value of dict.values()) {
        count += (value * (value - 1))/2;
    }
    return count;
};
