class Solution {
    public boolean hasIncreasingSubarrays(List<Integer> nums, int k) {
        int n = nums.size();

        if(n < 2 * k) return false;

        for (int i = 0; i <= n - 2 * k; i++) {
            boolean isFirstIncreasing = true;
            for (int j = i; j < i+k-1; j++) {
                if(nums.get(j+1) <= nums.get(j)) {
                    isFirstIncreasing = false;
                    break;
                }
            }

            boolean isSecondIncreasing = true;
            for (int j = i+k; j < i + 2*k-1; j++) {
                if(nums.get(j+1) <= nums.get(j)) {
                    isSecondIncreasing = false;
                    break;
                }
            }

            if(isFirstIncreasing && isSecondIncreasing) return true;
        }
        return false;
    }
}