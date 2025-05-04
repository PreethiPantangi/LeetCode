/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = {};
    for(let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i];
        if(map.hasOwnProperty(complement)) {
            return [map[complement]+1, i+1];
        }
        map[numbers[i]] = i;
    }
};