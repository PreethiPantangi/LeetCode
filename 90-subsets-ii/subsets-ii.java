class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Set<List<Integer>> finalResult = new HashSet();
        List<Integer> numbers = Arrays.stream(nums).boxed().collect(Collectors.toList());
        numbers.sort(null);
        getSubsets(0, numbers, new ArrayList<>(), finalResult);
        return new ArrayList<>(finalResult);
    }

    private static void getSubsets(int index, List<Integer> numbers, List<Integer> result, Set<List<Integer>> finalResult) {

        if(index == numbers.size()) {
            finalResult.add(new ArrayList<>(result));
            return;
        }

        result.add(numbers.get(index));
        getSubsets(index+1, numbers, result, finalResult);
        result.remove(result.size()-1);
        getSubsets(index+1, numbers, result, finalResult);
    }
}