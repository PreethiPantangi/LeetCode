class NumArray {

    private int[] precomputed;
    public NumArray(int[] nums) {
        int n = nums.length;
        precomputed = new int[n+1];
        for(int i = 0; i < nums.length; i++) {
            precomputed[i+1] = precomputed[i] + nums[i];
        }
    }
    
    public int sumRange(int left, int right) {
        return precomputed[right+1] - precomputed[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */