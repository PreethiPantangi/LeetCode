/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let reqCount = nums.length/3;
    let res = [];
    let dict = new Map();
    for (let i = 0; i < nums.length; i++) {
        if(dict.has(nums[i])) {
            dict.set(nums[i], dict.get(nums[i]) + 1); 
        } else {
            dict.set(nums[i], 1)
        }
        if(dict.get(nums[i]) > reqCount && !res.includes(nums[i])) {
            res.push(nums[i])
        }
    }
    return res;
};
