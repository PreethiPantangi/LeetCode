/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    for(let i = 0; i < len; i++) {
        let j = i + 1;
        while (j < len)  {
            if(nums[i] + nums[j] == target) {
                return [i, j];
            }
            j += 1;
        }
    }
};