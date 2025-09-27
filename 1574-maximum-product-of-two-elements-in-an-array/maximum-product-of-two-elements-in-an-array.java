class Solution {
    public int maxProduct(int[] nums) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        int k = 2;
        for(int i = 0; i < nums.length; i++) {
            minHeap.add(nums[i]);
            if(minHeap.size() > k) {
                minHeap.poll();
            }
        }
        int result = 1;
        while(minHeap.size() != 0) {
            result *= (minHeap.poll()-1);
        }
        return result;
    }
}