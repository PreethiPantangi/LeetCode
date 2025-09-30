class Solution {
    public int triangularSum(int[] nums) {
        while(nums.length > 1) {
            for(int i = 0; i < nums.length-1; i++) {
                nums[i] = (nums[i] + nums[i+1]) % 10;
            }
            nums = Arrays.copyOf(nums, nums.length-1);
        }
        return nums[0];
    }
}