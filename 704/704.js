/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    start = 0; 
    end = nums.length - 1;
    
    while(start <= end) {
        mid = parseInt(start + (end - start)/2);
        if(nums[mid] === target) {
            return mid;
        } else {
            if(nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;

};