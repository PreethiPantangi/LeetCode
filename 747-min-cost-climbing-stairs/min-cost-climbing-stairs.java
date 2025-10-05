class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int n = cost.length;
        int[] minCost = new int[n+1];
        Arrays.fill(minCost, -1);
        minCost[n] = 0;
        return Math.min(dp(n-1, cost, minCost), dp(n-2, cost, minCost));
    }

    private int dp(int n, int[] cost, int[] minCost) {
        if(minCost[n] != -1) return minCost[n];
        if(n == 0) return cost[0];
        if(n == 1) return cost[1];
        minCost[n] = Math.min(dp(n-1, cost, minCost), dp(n-2, cost, minCost)) + cost[n];
        return minCost[n];
    }
}