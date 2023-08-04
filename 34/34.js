/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [getFirstOrLastOccurance(nums, target, 'first'), getFirstOrLastOccurance(nums, target, 'last')];
};

const getFirstOrLastOccurance = (nums, target, occurance) => {
    start = 0;
    end = nums.length - 1;
    position = -1;

    while(start <= end) {
        mid = parseInt(start + (end-start)/2);
        if(nums[mid] === target) {
            position = mid;
            if (occurance === 'first') {
                end = mid - 1;
            } else if (occurance === 'last') {
                start = mid + 1;
            }
        } else {
            if(nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    return position;
}
