/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const numSet = new Set(nums);
    for (let i = 1; i <= nums.length + 1; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }
    
    return 1;
};
