class Solution {
    public void setZeroes(int[][] matrix) {
        List<List<Integer>> zeroIndexes = new ArrayList<>();

        int rows = matrix.length;
        int cols = matrix[0].length;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if(matrix[i][j] == 0) {
                    zeroIndexes.add(new ArrayList<>(Arrays.asList(i,j)));
                }
            }
        }

        for (List<Integer> list : zeroIndexes) {
            int row = list.get(0);
            int col = list.get(1);
            
            for (int i = 0; i < cols; i++) {
                matrix[row][i] = 0;
            }

            for (int i = 0; i < rows; i++) {
                matrix[i][col] = 0;
            }
        }
    }
}