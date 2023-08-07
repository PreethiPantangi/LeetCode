/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return rotateArray(nums)[0];
};

var rotateArray = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    while (nums[start] > nums[end]) {
        nums = [nums[end], ...nums.splice(0, nums.length-1)];
    }
    return nums;
}
