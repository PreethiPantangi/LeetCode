class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.reverseOrder());
        for(int i = 0; i < matrix.length; i++) {
            int[] r = matrix[i];
            for(int j = 0; j < r.length; j++) {
                heap.add(r[j]);
                if(heap.size() > k) {
                    heap.poll();
                }
            }
        }
        return heap.peek();
    }
}