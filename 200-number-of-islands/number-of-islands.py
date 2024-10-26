class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        total_islands = 0

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] != "0":
                    self.dfs(i, j, rows, cols, grid)
                    total_islands += 1
        return total_islands


    def dfs(self, row, col, rows, cols, grid):
        if row < 0 or row >= rows or col < 0 or col >= cols or grid[row][col] != "1":
            return
        
        grid[row][col] = "0"
        self.dfs(row-1, col, rows, cols, grid)
        self.dfs(row+1, col, rows, cols, grid)
        self.dfs(row, col-1, rows, cols, grid)
        self.dfs(row, col+1, rows, cols, grid)

