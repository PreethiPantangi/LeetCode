/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    mergeSort(nums, 0, nums.length - 1);
    return  nums;
};

function mergeSort(nums, left, right) {
    if(left >= right) {
        return;
    }
    const mid = Math.floor(left + (right - left)/2);
    mergeSort(nums, left, mid);
    mergeSort(nums, mid+1, right);
    merge(nums, left, mid, right);
}

function merge(nums, left, mid, right) {
    let leftLen = mid - left + 1;
    let rightLen = right - mid;
    let leftArray = new Array(leftLen);
    let rightArray = new Array(rightLen);

    for(let i = 0; i < leftLen; i++) {
        leftArray[i] = nums[left + i];
    }

    for(let i = 0; i < rightLen; i++) {
        rightArray[i] = nums[mid + 1 + i];
    }

    let i = 0; 
    let j = 0;
    let k = left;

    while(i < leftLen && j < rightLen) {
        if(leftArray[i] <= rightArray[j]) {
            nums[k] = leftArray[i];
            i += 1;
        } else {
            nums[k] = rightArray[j];
            j += 1;
        }
        k += 1;
    }

    while (i < leftLen) {
        nums[k] = leftArray[i];
        k += 1;
        i += 1;
    }

    while (j < rightLen) {
        nums[k] = rightArray[j];
        k += 1;
        j += 1;
    }

}