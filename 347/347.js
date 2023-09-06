/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let res = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in res) {
            res[nums[i]] += 1
        } else {
            res[nums[i]] = 1;
        }
    }

    let frequenceArray = [];
    for(let key in res) {
        frequenceArray.push([key, res[key]]);
    }

    sortedFrequencyArray = frequenceArray.sort((num1, num2) => {
        return num2[1] - num1[1];
    })

    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(sortedFrequencyArray[i][0]);
    }

    return result;
};
