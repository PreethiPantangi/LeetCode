class Solution {
    public int[] countBits(int n) {
        int[] result = new int[n+1];
        int[] memo = new int[n+1];
        Arrays.fill(memo, -1);
        memo[0] = 0;

        for(int i = 0; i <= n; i++) {
            if(memo[i] != -1) {
                result[i] = memo[i];
            } else {
                memo[i] = memo[i & (i-1)] + 1;
                result[i] = memo[i];
            }
        }
        return result;
    }
}