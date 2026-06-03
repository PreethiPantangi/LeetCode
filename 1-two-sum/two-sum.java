class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for(int j = 0; j < nums.length; j++) {
            if(map.containsKey(target - nums[j])) {
                return new int[]{j, map.get(target - nums[j])};
            } else {
                map.put(nums[j], j);
            }
        }
        return new int[2];
    }
}