/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let directions = [0,1,0,-1,0];
    let maxGold = 0;
    const dfsBacktrack = (grid, rows, cols, row, col) => {
        if(row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 0) {
            return 0;
        }
        let maxGold = 0;
        let originalVal = grid[row][col];
        grid[row][col] = 0;
        for(let i = 0; i < 4; i++) {
            maxGold = Math.max(maxGold, dfsBacktrack(grid, rows, cols, directions[i] + row, directions[i+1] + col));
        }
        grid[row][col] = originalVal;
        return maxGold + originalVal;
    }
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            maxGold = Math.max(maxGold, dfsBacktrack(grid, rows, cols, i, j));
        }
    }
    return maxGold;
};