class Solution {
    public int climbStairs(int n) {
        Map<Integer, Integer> map = new HashMap<>();
        map.put(1, 1);
        map.put(2, 2);
        return getDistinctWays(n, map);
    }

    private int getDistinctWays(int n, Map<Integer, Integer> map) {
        if(n < 0) return 0;
        if(n == 0) return 1;
        if(map.containsKey(n)) return map.get(n);
        int ways = getDistinctWays(n-1, map) + getDistinctWays(n-2, map);
        map.put(n, ways);
        return ways;
    }
}