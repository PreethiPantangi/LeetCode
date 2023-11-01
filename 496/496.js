/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        if(nums2.includes(nums1[i])) {
            let pos = nums2.indexOf(nums1[i]) + 1;
            if(pos >= nums2.length) {
                res.push(-1)
            } else {
                let max = -1;
                for (let j = pos; j < nums2.length; j++) {
                    if(nums2[j] > nums1[i]) {
                        max = nums2[j];
                        break;
                    }
                }
                res.push(max);
            }
        } else {
            res.push(-1);
        }
    }
    return res;
};
