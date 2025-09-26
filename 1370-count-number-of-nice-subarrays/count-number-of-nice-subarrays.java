class Solution {
    public int numberOfSubarrays(int[] nums, int k) {
        return atMost(nums, k) - atMost(nums, k-1);
    }

    private static int atMost(int[] nums, int k) {
        int i = 0;
        int j = 0;
        int count = 0;
        while(j < nums.length) {
            if((nums[j] & 1) == 1) k -= 1;

            while(k < 0) {
                if(nums[i] % 2 != 0) k += 1;
                i += 1;
            }

            count += j - i + 1;
            j += 1;
        }
        return count;
    }
}