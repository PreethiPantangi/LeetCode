class Solution {
    public int totalFruit(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        int max = 0;
        int i = 0;
        int j = 0;
        while (j < nums.length) {
            if (map.get(nums[j]) != null) {
                map.put(nums[j], map.get(nums[j]) + 1);
            } else {
                map.put(nums[j], 1);
            }
            if (map.size() <= 2) {
                max = Math.max(max, j-i+1);
            } else {
                while (map.size() > 2) {
                    map.put(nums[i], map.get(nums[i])-1);
                    if (map.get(nums[i]) == 0) map.remove(nums[i]);
                    i += 1;
                }
            }
            j += 1;
        }
        return max;
    }
}