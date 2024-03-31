/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let count = 0;
    let minKIndex = maxKIndex = culpritIndex = -1;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < minK || nums[i] > maxK) {
            culpritIndex = i;
        }
        
        if(nums[i] === minK) {
            minKIndex = i;
        }

        if(nums[i] === maxK) {
            maxKIndex = i;
        }

        const minIndex = Math.min(minKIndex, maxKIndex);
        const temp = minIndex - culpritIndex;
        count += temp <= 0 ? 0 : temp;
    }
    return count;
};