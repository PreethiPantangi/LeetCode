/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = merge(nums1, nums2);
    let len = mergedArray.length - 1;
    if (len % 2 == 0) {
        return mergedArray[len/2];
    } else {
        return (mergedArray[Math.floor(len/2)] + mergedArray[Math.ceil(len/2)]) / 2;
    }
};

function merge(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    let mergedArray = [];
    
    let i = 0;
    let j = 0;

    while(i < n && j < m) {
        if(nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i]);
            i += 1;
        } else {
            mergedArray.push(nums2[j]);
            j += 1;
        }
    }

    while (i < n) {
        mergedArray.push(nums1[i]);
        i += 1;
    }

    while (j < m) {
        mergedArray.push(nums2[j]);
        j += 1;
    }

    return mergedArray;

}