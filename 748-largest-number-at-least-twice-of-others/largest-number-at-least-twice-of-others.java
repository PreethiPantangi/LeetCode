class Solution {
    public int dominantIndex(int[] nums) {
        int max = Arrays.stream(nums).max().orElse(0);
        int index = -1;
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] * 2 > max && nums[i] != max) return -1;
            if(max == nums[i]) index = i;
        }
        return index;
    }
}