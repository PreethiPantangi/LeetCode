/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    let moves = 0;
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            moves += (nums[i - 1] - nums[i] + 1);
            nums[i] = nums[i - 1] + 1;
        }
    }
    return moves;
};
