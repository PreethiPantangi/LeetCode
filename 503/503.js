/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let isFoundInFirst = false;
        let isFoundInSecond = false;
        for (let j = i+1; j < nums.length; j++) {
            if(nums[j] > num) {
                res.push(nums[j]);
                isFoundInFirst = true;
                break;
            }
        }
        if(!isFoundInFirst) {
            for (let j = 0; j < i; j++) {
                if(nums[j] > num) {
                    res.push(nums[j]);
                    isFoundInSecond = true;
                    break;
                }
            }   
        }
        if(!isFoundInFirst && !isFoundInSecond) {
            res.push(-1);
        }
    }
    return res;
};