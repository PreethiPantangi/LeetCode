class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(candidates);
        getCombinationSum2(0, candidates, target, new ArrayList<>(), result);
        return result;
    }

    private static void getCombinationSum2(int index, int[] numbers, int target, List<Integer> result, List<List<Integer>> finalResult) {
        if(target == 0) {
            finalResult.add(new ArrayList<>(result));
            return;
        }

        for(int i = index; i < numbers.length; i++) {
            if(i > index && numbers[i] == numbers[i-1]) continue;
            if(numbers[i] > target) break;

            result.add(numbers[i]);
            getCombinationSum2(i+1, numbers, target - numbers[i], result, finalResult);
            result.remove(result.size()-1);
        }
    }
}