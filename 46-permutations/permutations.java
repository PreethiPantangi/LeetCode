class Solution {
    public List<List<Integer>> permute(int[] nums) {
        boolean[] tracker = new boolean[nums.length];
        List<List<Integer>> result = new ArrayList<>();
        getPermutations(nums, tracker, new ArrayList<>(), result);
        return result;
    }

    private static void getPermutations(int[] nums, boolean[] tracker, List<Integer> result, List<List<Integer>> finalResult) {
        if(result.size() == nums.length) {
            finalResult.add(new ArrayList<>(result));
            return;
        }       

        for(int i = 0; i < nums.length; i++) {
            if(!tracker[i]) {
                tracker[i] = true;
                result.add(nums[i]);
                getPermutations(nums, tracker, result, finalResult);
                tracker[i] = false;
                result.remove(result.size()-1);
            }
        }
    }
}