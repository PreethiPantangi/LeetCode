/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    let n = nums.length;
    let visited = new Array(n).fill(false);
    let score = 0;

    const indexedNums = nums.map((num, index) => [num, index]);
    indexedNums.sort((a,b) => a[0] - b[0]);

    for(const [value, index] of indexedNums) {
        if(visited[index]) continue;
        score += value;

        visited[index] = true;
        if(index - 1 >= 0) visited[index - 1] = true;
        if(index + 1 < n) visited[index + 1] = true;

    }
    
    return score;
};
