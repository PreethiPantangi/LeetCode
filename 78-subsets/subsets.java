class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> finalResult = new ArrayList<>();
        getSubsets(0, nums, new ArrayList<>(), finalResult);
        return finalResult;
    }

    private static List<List<Integer>> getSubsets(int index, int[] nums, List<Integer> result, List<List<Integer>> finalResult) {
        if(index == nums.length) {
            finalResult.add(new ArrayList<>(result));
            return finalResult;
        }
        result.add(nums[index]);
        getSubsets(index+1, nums, result, finalResult);
        result.remove(result.size() - 1);
        getSubsets(index+1, nums, result, finalResult);
        return finalResult;
    }
}