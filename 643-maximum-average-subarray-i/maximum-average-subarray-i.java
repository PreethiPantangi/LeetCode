class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int i = 0;
        int j = 0;
        double max = Integer.MIN_VALUE;
        double sum = 0;
        while(j < nums.length) {
            int len = j - i + 1;
            sum += nums[j];

            while(len > k) {
                sum -= nums[i++];
                len = j - i + 1;
            }
            if(len == k) {
                double avg = (sum/len);
                max = Math.max(max, avg);
            }
            j += 1;
        }
        return max;
    }
}