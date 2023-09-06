/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    let hasDuplicate = false;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in map) {
            map[nums[i]] += 1;
        } else {
            map[nums[i]] = 1;
        }
        if (map[nums[i]] > 1) {
            hasDuplicate = true;
            break;
        }
    }
    return hasDuplicate;
};