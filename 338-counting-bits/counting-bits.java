class Solution {
    public int[] countBits(int n) {
        int[] result = new int[n+1];
        for(int i = 0; i <= n; i++) {
            result[i] = getSetBits(i);   
        }
        return result;
    }

    private int getSetBits(int n) {
        if(n == 0) return 0;
        n = (n & n-1);
        return getSetBits(n) + 1;
    }
}