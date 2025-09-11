/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    mergeSort(nums, 0, nums.length-1);
    return nums;
};

var mergeSort = function(nums, low, high) {
    if(low >= high) return;
    let mid = Math.floor((low + high)/2);
    mergeSort(nums, low, mid);
    mergeSort(nums, mid+1, high);
    merge(nums, low, mid, high);
}

var merge = function(nums, low, mid, high) {
    let temp = [];
    let i = low;
    let j = mid+1;

    while(i <= mid && j <= high) {
        if(nums[i] <= nums[j]) {
            temp.push(nums[i]);
            i++;
        } else {
            temp.push(nums[j]);
            j++;
        }
    }

    while(i <= mid) {
        temp.push(nums[i]);
        i++;
    }

    while(j <= high) {
        temp.push(nums[j]);
        j++;
    }

    for(let i = low; i <= high; i++) {
        nums[i] = temp[i-low];
    }
}
