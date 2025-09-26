class Solution {
    public int totalFruit(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        int max = 0;
        int i = 0;
        int j = 0;
        while (j < nums.length) {
            map.put(nums[j], map.getOrDefault(nums[j], 0) + 1);
            if (map.size() > 2) {
                map.put(nums[i], map.get(nums[i])-1);
                if (map.get(nums[i]) == 0) map.remove(nums[i]);
                i += 1;
            }
            max = Math.max(max, j-i+1);
            j += 1;
        }
        return max;
    }
}