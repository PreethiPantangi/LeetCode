class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        int rows = mat.length;
        int[] soldiers = new int[rows];
        
        for(int i = 0; i < rows; i++) {
            int count = 0;
            int[] row = mat[i];
            for(int j = 0; j < row.length; j++) {
                count += row[j];
            }
            soldiers[i] = count;
        }

        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a,b) -> {
            if(a[0] != b[0]) {
                return b[0] - a[0];
            }
            return b[1] - a[1];
        });


        for(int i = 0; i < soldiers.length; i++) {
            maxHeap.add(new int[]{soldiers[i], i});
            if(maxHeap.size() > k) {
                maxHeap.poll();
            }
        }
        int[] result = new int[k];
        int i = k-1;
        while(maxHeap.size() != 0) {
            result[i] = maxHeap.poll()[1];
            i -= 1;
        }
        return result;
    }
}