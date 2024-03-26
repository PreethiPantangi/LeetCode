/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(nums.length === 1 ) {
        if (nums[0] === 1) {
            return 2;
        } else if (nums[0] === 0) {
            return 1;
        } else if (nums[0] > 1 || nums[0] < 0) {
            return 1;
        }
    } else {
        let max = Math.max(...nums);
        if(max > 0) {
            let map = new Map();
            for(let i = 0; i < nums.length; i++) {
                if(map.get(nums[i])) {
                    map.set(nums[i], map.get(nums[i]) + 1);
                } else {
                    map.set(nums[i], 1);
                }
            }
            for(let i = 1; i <= max+1; i++) {
                if(!map.get(i)) {
                    return i;
                }
            }
        } else {
            return 1;
        }        
    }
};