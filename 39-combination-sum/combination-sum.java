class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>(); 
        getCombinations(0, candidates, target, new ArrayList<>(), result);
        return result;
    }

    private static void getCombinations(int index, int[] candidates, int target, List<Integer> result, List<List<Integer>> finalResult) {
        if(index == candidates.length) {
            if(target == 0) {
                finalResult.add(new ArrayList<>(result));
            }
            return;
        }

        if(candidates[index] <= target) {
            result.add(candidates[index]);
            getCombinations(index, candidates, target - candidates[index], result, finalResult);
            result.remove(result.size()-1);
        }
        getCombinations(index+1, candidates, target, result, finalResult);
    }
}