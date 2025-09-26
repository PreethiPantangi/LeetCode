class Solution {
    public int numOfSubarrays(int[] nums, int k, int threshold) {
        int i = 0;
        int j = 0;
        int count = 0;
        int sum = 0;
        while(j < nums.length) {
            sum += nums[j];

            int len = j - i + 1;

            if(len > k) {
                sum -= nums[i];
                i += 1;
            }
            len = j - i + 1;
            if (len == k && sum/len >= threshold) {
                count += 1;
            }
            j += 1;
        }
        return count;
    }
}