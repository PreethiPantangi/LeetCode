class Solution {
    public int longestOnes(int[] nums, int k) {
        int i = 0;
        int max = 0;
        int zeroCount = 0;
        for (int j = 0; j < nums.length; j++) {
            if (nums[j] == 0) {
                zeroCount += 1;
            }

            while (zeroCount > k) {
                if (nums[i] == 0) {
                    zeroCount -= 1;
                }
                i += 1;
            }

            max = Math.max(max, j - i + 1);

        }
        return max;
    }
}