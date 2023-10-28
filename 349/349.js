/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1 = new Set(nums1)
    nums2 = new Set(nums2)
    res = []
    for(const val of nums1) {
        if(nums2.has(val)) {
            res.push(val)
        }
    }
    return res
};