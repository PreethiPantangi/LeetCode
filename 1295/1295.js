/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let filteredArr = nums.filter((num) => num.toString().length % 2 === 0);
    return filteredArr.length;
};