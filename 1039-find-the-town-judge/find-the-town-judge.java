class Solution {
    public int findJudge(int n, int[][] trust) {
        int[] trustCount = new int[n+1];
        int[] trustBy = new int[n+1];

        for(int i = 0; i < trust.length; i++) {
            trustCount[trust[i][0]] += 1;
            trustBy[trust[i][1]] += 1;
        }
        
        for(int i = 1; i <= n; i++) {
            if(trustCount[i] == 0 && trustBy[i] == n - 1) {
                return i;
            }
        }
        
        return -1;
    }
}