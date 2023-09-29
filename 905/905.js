/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    // if(nums.length === 0 || nums.length === 1) {
    //   return nums;
    // } else {
    //     for(let i = 0; i < nums.length; i++) {
    //     if(nums[i] % 2 !== 0) {
    //       for(let j = i+1 ; j < nums.length; j++) {
    //         if(nums[j] % 2 === 0) {
    //           let temp = nums[i];
    //           nums[i] = nums[j];
    //           nums[j] = temp;
    //           break;
    //         }
    //       }
    //     }
    //   }
    //   return nums;
    // }
    let result = [];
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] % 2 === 0) {
        result.unshift(nums[i])
      } else {
        result.push(nums[i])
      }
    }
    return result;
};