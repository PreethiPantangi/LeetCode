class Solution {
    public int orangesRotting(int[][] grid) {
        
        int rows = grid.length;
        int cols = grid[0].length;
        int[][] visited = new int[rows][cols];
        int initialFreshOrangesCount = 0;

        Queue<int[]> queue = new LinkedList<>();

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 2) {
                    queue.offer(new int[] { i, j });
                } else if (grid[i][j] == 1) {
                    initialFreshOrangesCount += 1;
                }
            }
        }

        int minutes = 0;
        while (!queue.isEmpty()) {
            
            int size = queue.size();
            boolean spread = false;
            
            for (int i = 0; i < size; i++) {
                int[] coords = queue.poll();
                int row = coords[0];
                int col = coords[1];   
                if (row - 1 >= 0 && grid[row - 1][col] == 1) {
                    grid[row - 1][col] = 2;
                    visited[row - 1][col] = 1;
                    queue.offer(new int[]{row-1, col});
                    initialFreshOrangesCount -= 1;
                    spread = true;
                }
                if (row + 1 < rows && grid[row + 1][col] == 1) {
                    grid[row + 1][col] = 2;
                    queue.offer(new int[]{row+1, col});
                    initialFreshOrangesCount -= 1;
                    spread = true;
                }
                if (col - 1 >= 0 && grid[row][col - 1] == 1) {
                    grid[row][col - 1] = 2;
                    queue.offer(new int[]{row, col-1});
                    initialFreshOrangesCount -= 1;
                    spread = true;
                }
                if (col + 1 < cols && grid[row][col + 1] == 1) {
                    grid[row][col + 1] = 2;
                    queue.offer(new int[]{row, col+1});
                    initialFreshOrangesCount -= 1;
                    spread = true;
                } 
            }

            if (spread) minutes += 1;

        }
        
        return (initialFreshOrangesCount <= 0) ? minutes : -1;
    }
}