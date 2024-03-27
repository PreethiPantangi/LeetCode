/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if ((new Set(nums)).size === 1 && nums[0] < k) {
        return (nums.length * (nums.length+1))/2;
    } else {
        let res = i = 0;
        while(i < nums.length) {
            j = i + 1;
            product = nums[i];
            if(product < k) {
                res += 1;
            }
            while(j < nums.length) {
                if (product * nums[j] < k) {
                    product *= nums[j];
                    res += 1;
                } else {
                    break;
                }
                j += 1;
            }
            i += 1;
        }
        return res;
    }
};