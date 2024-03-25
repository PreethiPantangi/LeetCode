/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let len = nums.length;
    let arr = new Array(len+1).fill(0);
    let res= [];
    for(let i = 0; i < len; i++) {
        arr[nums[i]] += 1;
        if(arr[nums[i]] === 2 && !res.includes(nums[i])) {
            res.push(nums[i]);
        }
    }
    return res;
};