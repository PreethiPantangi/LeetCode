/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let arr = new Array(nums.length+1).fill(0);
    let res= [];
    for(let i = 0; i < nums.length; i++) {
        arr[nums[i]] += 1;
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 2) {
            res.push(i);
        }
    }
    return res;
};