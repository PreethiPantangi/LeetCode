class Solution {
    public int triangularSum(int[] nums) {
        return reduceArray(nums);
    }

    private int reduceArray(int[] nums) {
        if(nums.length == 1) return nums[0];
        int[] newNums = new int[nums.length - 1];
        int i = 0;
        int j = 1;
        while(j < nums.length) {
            newNums[i] = (nums[i] + nums[j]) % 10;
            i += 1;
            j += 1;
        }
        return reduceArray(newNums);
    }
}