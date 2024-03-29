/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let max = Math.max(...nums);
    let res = start = wSize = 0;
    for(let end = 0; end < nums.length; end++) {
        if(nums[end] === max) {
            wSize += 1;
        }
        while(wSize === k) {
            if(nums[start] === max) {
                wSize -= 1;
            }
            start += 1;
        }
        res += start;
    }
    return res;
};