class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        PriorityQueue<int[]> heap = new PriorityQueue<>((a,b) -> {
            if(a[1] == b[1]) {
                return b[0] - a[0];
            } else {
                return b[1] - a[1];
            }
        });
        List<Integer> result = new ArrayList<>();
        for(int i = 0; i < arr.length; i++) {
            heap.add(new int[]{arr[i], Math.abs(arr[i] - x)});
            if(heap.size() > k) {
                heap.poll();
            }
        }
        while(heap.size() != 0) {
            result.add(heap.poll()[0]);
        }
        return result.stream().sorted().toList();
    }
}