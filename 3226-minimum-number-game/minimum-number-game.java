class Solution {
    public int[] numberGame(int[] nums) {
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        int[] ans = new int[nums.length];
        for(int i = 0; i < nums.length; i++) {
            heap.add(nums[i]);
        }
        int firstIndex = 0;
        int secondIndex = 1;
        int i = 0;
        while(heap.size() != 0) {
            if(i % 2 == 0) {
                ans[secondIndex] = heap.poll();
                secondIndex += 2;
            } else {
                ans[firstIndex] = heap.poll();
                firstIndex += 2;
            }
            i += 1;
        }
        return ans;
    }
}