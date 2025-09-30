class Solution {
    public boolean lemonadeChange(int[] bills) {
        int fiveCount = 0;
        int tenCount = 0;
        for(int i = 0; i < bills.length; i++) {
            if(bills[i] == 5) {
                fiveCount += 1;
            } else if(bills[i] == 10) {
                tenCount += 1;
                fiveCount -= 1;
                if(fiveCount < 0) return false;
            } else {
                if(tenCount > 0 && fiveCount > 0) {
                    tenCount -= 1;
                    fiveCount -= 1;
                } else if(fiveCount >= 3) {
                    fiveCount -= 3;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}