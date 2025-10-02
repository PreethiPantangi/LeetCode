class Solution {
    public int arrangeCoins(int n) {
        int completeSteps = 0;
        int step = 1;
        while(n != 0) {
            if(n - step >= 0) {
                completeSteps += 1;
                n = n - step;
                step += 1;
            } else {
                return completeSteps;
            }
        }
        return completeSteps;
    }
}