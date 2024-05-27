/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let len = nums.length; 
    for(let i = 0; i <= len; i++) {
        let vals = nums.filter((num) => num >= i);
        if(i === vals.length) {
            return i;
        }
    }
    return -1;
};