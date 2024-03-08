/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let mapping = {};
    let max = -1;
    let res = 0;
    nums.forEach((num) => {
        if(mapping[num]) {
            mapping[num] += 1;
        } else {
            mapping[num] = 1;
        }
        if(mapping[num] > max) {
            max = mapping[num];
        }
    });
    let values = Object.values(mapping);
    values.forEach((value) => {
        if(value >= max) {
            res += value;
        }
    });
    return res;
};