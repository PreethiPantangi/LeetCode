/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const mergeSort = (arr, left, right) => {
        if (left >= right) return;
        
        const mid = Math.floor((left + right) / 2);
        
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    };

    const merge = (arr, left, mid, right) => {
        const temp = [];
        let i = left, j = mid + 1;
        
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp.push(arr[i++]);
            } else {
                temp.push(arr[j++]);
            }
        }
        
        while (i <= mid) {
            temp.push(arr[i++]);
        }
        
        while (j <= right) {
            temp.push(arr[j++]);
        }
        
        for (let k = 0; k < temp.length; k++) {
            arr[left + k] = temp[k];
        }
    };

    mergeSort(nums, 0, nums.length - 1);
    return nums;
};
