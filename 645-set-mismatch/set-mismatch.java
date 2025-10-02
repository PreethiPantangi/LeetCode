class Solution {
    public int[] findErrorNums(int[] nums) {
        int sum = ((nums.length) * (nums.length + 1))/2;
        Set<Integer> set = new HashSet<>();
        int n = 0;
        int numsSum = 0;
        for(int num: nums) {
            numsSum += num;
            if(set.contains(num)) {
                n = num;
            } else {
                set.add(num);
            }
        }
        return new int[]{n, (sum - (numsSum - n))};
    }
}