/**
 * @param {number[]} nums
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0; 
    let end = nums.length - 1;
    while (start < end) {
        mid = parseInt(start + (end - start)/2);
        midEle = nums[mid];
        lastEle = nums[end];
        if (nums[mid] === target) {
            return mid
        }
        if (midEle > lastEle) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return -1;
};

console.log(search([1,2,3,4,5], 4));