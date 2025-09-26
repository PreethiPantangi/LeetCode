class Solution {
    public long maximumSubarraySum(int[] nums, int k) {
        int i = 0;
        int j = 0;
        long max = 0;
        long sum = 0;
        Map<Integer, Integer> map = new HashMap<>();
        while(j < nums.length) {
            
            sum += nums[j];
            map.put(nums[j], map.getOrDefault(nums[j], 0) + 1);

            if (map.get(nums[j]) > 1 || j - i + 1 > k) {
                int leftVal = nums[i++];
                map.put(leftVal, map.get(leftVal) - 1);
                if (map.get(leftVal) == 0) map.remove(leftVal);
                sum -= leftVal;  
            }

            if(j - i + 1 == k && map.size() == k) {
                max = Math.max(max, sum);
            } 
            j += 1;            
        }
        return max;
    }
}