/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = [];
    if(nums1.length > nums2.length) {
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    nums1.forEach((num) => {
        if(nums2.includes(num)) {
            res.push(num);
            nums2.splice(nums2.indexOf(num), 1)
        }
    });
    return res;
};