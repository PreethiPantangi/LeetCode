class Solution {
    int sum = 0;
    public int subsetXORSum(int[] nums) {
        generateXors(0, 0, nums);
        return sum;
    }

    private void generateXors(int index, int xorSum, int[] nums) {
        if(index == nums.length) {
            sum += xorSum;
            return;
        }

        generateXors(index + 1, xorSum ^ nums[index], nums);
        generateXors(index + 1, xorSum, nums);
    }
}