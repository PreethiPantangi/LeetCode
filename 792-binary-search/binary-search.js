/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums, 0, nums.length-1, target);
};

var binarySearch = (arr, start, end, target) => {
    if(start > end) return -1;
    let mid = Math.floor((start + end)/2);
    if(arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, start, mid - 1, target);
    } else {
        return binarySearch(arr, mid + 1, end, target);
    }
}