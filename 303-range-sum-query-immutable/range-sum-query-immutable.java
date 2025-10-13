class NumArray {

    private int[] preComputed;
    public NumArray(int[] nums) {
        int n = nums.length;
        this.preComputed = new int[n+1];
        for(int i = 0; i < n; i++) {
            this.preComputed[i+1] += this.preComputed[i] + nums[i];
        }
    }
    
    public int sumRange(int left, int right) {
        return this.preComputed[right+1] - this.preComputed[left];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */