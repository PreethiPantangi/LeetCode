/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length; 

    const dfs = (row, col) => {
        if(row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== '1') {
            return;
        }
        grid[row][col] = '0';
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }
    let islands = 0;
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if(grid[row][col] === '1') {
                dfs(row, col);
                islands += 1;
            }
        }
    }
    return islands;
};