class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length == 1) return nums.length;
        int result = 0;
        int i = 0;
        int j = i + 1;
        while(i < nums.length && j < nums.length) {
            if(nums[i] == nums[j]) {
                nums[j] = Integer.MIN_VALUE;
                j += 1;
                result += 1;
            } else {
                i = j;
                j = j + 1;
            }
        }
        int write = 0;
        for(int read = 0; read < nums.length; read++) {
            if(nums[read] != Integer.MIN_VALUE) {
                nums[write] = nums[read];
                write++;
            }
        }
        return nums.length - result;
    }
}