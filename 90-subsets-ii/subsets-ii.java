class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Set<List<Integer>> finalResult = new HashSet();
        List<Integer> numbers = Arrays.stream(nums).boxed().collect(Collectors.toList());
        numbers.sort(null);
        getSubsets(0, numbers, new ArrayList<>(), finalResult);
        return new ArrayList<>(finalResult);
    }

    private static void getSubsets(int index, List<Integer> numbers, List<Integer> result, Set<List<Integer>> finalResult) {

        finalResult.add(new ArrayList<>(result));

        for(int i = index; i < numbers.size(); i++) {

            if(i != index && numbers.get(i) == numbers.get(i-1)) continue;

            result.add(numbers.get(i));
            getSubsets(i+1, numbers, result, finalResult);
            result.remove(result.size()-1);
        }
    }
}