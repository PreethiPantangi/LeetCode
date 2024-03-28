var maxSubarrayLength = function(nums, k) {
    const frequency = {};
    let res = i = j = 0;
    while(j < nums.length) {
        frequency[nums[j]] = (frequency[nums[j]] || 0) + 1;
        while(frequency[nums[j]] > k) {
            frequency[nums[i]] -= 1;
            i += 1;
        }
        res = Math.max(res, j - i + 1);
        j += 1;
    }
    return res;
};
