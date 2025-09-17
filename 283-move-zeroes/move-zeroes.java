class Solution {
    public void moveZeroes(int[] nums) {
        if(nums.length == 1) return;
        for(int i = 0; i < nums.length-1; i++) {
            if(nums[i] == 0) {
                int j = i + 1;
                while(j < nums.length && nums[j] == 0) j += 1;
                if(i < nums.length && j < nums.length) swap(nums, i, j);
            }
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}