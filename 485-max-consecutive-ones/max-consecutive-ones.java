class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int onesCount = 0;
        int result = 0;
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] != 0) {
                onesCount += 1;
            } else {
                result = Math.max(result, onesCount);
                onesCount = 0;
            }
        }
        return Math.max(result, onesCount);
    }
}