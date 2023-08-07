/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0; 
    let end = nums.length - 1;
    while (start < end) {
        mid = parseInt(start + (end - start)/2);
        midEle = nums[mid];
        lastEle = nums[end];
        if (midEle > lastEle) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return nums[start];
};
