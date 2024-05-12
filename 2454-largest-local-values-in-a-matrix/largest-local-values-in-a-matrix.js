/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let res = [];

    for (let i = 0; i <= rows - 3; i++) {
        res[i] = [];
        for (let j = 0; j <= cols - 3; j++) {
            let max = -1;
            for (let k = i; k < i + 3; k++) {
                let rowStr = "";
                for (let l = j; l < j + 3; l++) {
                    rowStr += grid[k][l] + " ";
                    max = Math.max(max, grid[k][l]);
                }
            }
            res[i][j] = max;
        }
    }
    return res;
};