class Solution {
    public int minCost(String colors, int[] neededTime) {
        int minCost = 0;
        int i = 0;

        for (int j = 1; j < colors.length(); j++) {
            if (colors.charAt(i) == colors.charAt(j)) {
                if (neededTime[i] < neededTime[j]) {
                    minCost += neededTime[i];
                    i = j;
                } else {
                    minCost += neededTime[j];
                }
            } else {
                i = j;
            }
        }

        return minCost;
    }
}