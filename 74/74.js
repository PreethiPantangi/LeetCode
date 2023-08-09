/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let position;
    for (let i = 0; i < matrix.length; i++) {
        if(matrix[i][matrix[i].length-1] >= target) {
            position = getElementPosition(matrix[i], target);
            break;
        }
    }
    return position >= 0 ? true : false;
};

var getElementPosition = function (nums, target) {
    start = 0; 
    end = nums.length - 1;
    while(start <= end) {
        mid = parseInt(start + (end - start)/2);
        if(nums[mid] === target) {
            return mid;
        } else {
            if(nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}
