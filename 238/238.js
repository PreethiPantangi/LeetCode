/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [];
    let currentIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        let j = 0;
        currentIndex = i;
        while (j < nums.length) {
            if (j != currentIndex) {
                product *= nums[j];
            }   
            j += 1;
        }
        res.push(parseInt(product));
    }
    return res;
};