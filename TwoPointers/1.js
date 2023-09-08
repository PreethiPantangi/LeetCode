/**
 * Problem Statement
 * Given a sorted array [1,4,4,5,5,5,6,6,11] and a target k 11. Find the number of pairs with the sum equals to target.
 */

/**
 * Approach 1 - Brute force
 * 
 * @param {Array} nums 
 * @param {Number} target 
 * @returns {Number}
 * 
 * In this approach the  time complexity is O(n^2)
 * 
 */
const approachOne = function (nums, target) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        while (j < nums.length) {
            if (nums[i] + nums[j] === target) {
                res += 1;
            }
            j += 1;
        }
    }
    return res;
}

console.log(approachOne([1,4,4,5,5,5,6,6,11], 11));
console.log(approachOne([1,4,4,5,5,5,6,6,11], 10));

const approachTwo = function (nums, target) {
    let res = 0;
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        if (nums[start] + nums[end] > target) {
            end -= 1;
        } else if (nums[start] + nums[end] < target) {
            start += 1;
        } else {
            if (nums[start] !== nums[end]) {
                // get count of start element 
                // get count of end element 
            } else {
                res += end - start + 1;
            }
        }
    }
    return res;
}

const frequency = function (nums, start, end) {
    
}


console.log(approachTwo([1,4,4,5,5,5,6,6,11], 11));
console.log(approachTwo([1,4,4,5,5,5,6,6,11], 10));