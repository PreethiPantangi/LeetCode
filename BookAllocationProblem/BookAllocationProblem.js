/**
 * @param {number[]} nums
 * @param {number} students
 * @return {number}
 */
function bookAllocation(nums, students) {
    let start = 0;
    let end = nums.reduce((total, num) => {
        return total + num;
    })   
    let ans;
    while (start <= end) {
        mid = parseInt(start + (end - start)/2);
        if (isPossibleSolution(nums,students, mid)) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
}

function isPossibleSolution(nums, students, mid) {
    totalStudents = 1;
    totalPages = 0;
    i = 0;

    while (i < nums.length) {
        if (totalPages + nums[i] <= mid) {
            totalPages += nums[i];
        } else {
            totalStudents += 1;
            if (totalStudents > students || nums[i] > mid) {
                return false;
            }
            totalPages = nums[i];
        }
        i++;
    }
    return true;
}

console.log(bookAllocation([25, 46, 28, 49, 24], 4));