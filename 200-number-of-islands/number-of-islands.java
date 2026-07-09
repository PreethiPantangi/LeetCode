class Solution {
    public int numIslands(char[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        int result = 0;
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < cols; j++) {
                if(grid[i][j] != '0') {
                    dfs(i, j, rows, cols, grid);
                    result += 1;
                }
            }
        }
        return result;
    }

    private void dfs(int row, int col, int rows, int cols, char[][] grid) {
        if(row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] != '1')
            return;

        grid[row][col] = '0';
        dfs(row - 1, col, rows, cols, grid);
        dfs(row + 1, col, rows, cols, grid);
        dfs(row, col - 1, rows, cols, grid);
        dfs(row, col + 1, rows, cols, grid);
    }
}