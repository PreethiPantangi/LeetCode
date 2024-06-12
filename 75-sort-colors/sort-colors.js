/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const merge = (nums, start, mid, end) => {
        let leftArrLen = mid - start + 1;
        let rightArrLen = end - mid;
        let leftArr = new Array(leftArrLen);
        let rightArr = new Array(rightArrLen);
        for(let i = 0; i < leftArrLen; i++) {
            leftArr[i] = nums[start + i];
        }
        for(let i = 0; i < rightArrLen; i++) {
            rightArr[i] = nums[mid + i + 1];
        }
        let i = 0, j = 0, k = start;
        while(i < leftArrLen && j < rightArrLen) {
            if(leftArr[i] <= rightArr[j]) {
                nums[k] = leftArr[i];
                i += 1;
            } else {
                nums[k] = rightArr[j];
                j += 1;
            }
            k += 1;
        }
        while(i < leftArrLen) {
            nums[k] = leftArr[i];
            i += 1;
            k += 1;
        }
        while(j < rightArrLen) {
            nums[k] = rightArr[j];
            j += 1;
            k += 1;
        }
    }
    const mergeSort = (nums, start, end) => {
        if (start >= end) return;
        let mid = parseInt((start + end)/2);
        mergeSort(nums, start, mid);
        mergeSort(nums, mid+1, end);
        merge(nums, start, mid, end);
    };
    mergeSort(nums, 0, nums.length-1);
    return nums;
};