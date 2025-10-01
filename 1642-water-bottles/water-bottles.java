class Solution {
    public int numWaterBottles(int numBottles, int numExchange) {
        int result = numBottles;
        while(numBottles >= numExchange) {
            int canExchange = (int) (numBottles / numExchange);
            result += canExchange;
            numBottles = canExchange + (numBottles % numExchange);
        }
        return result;
    }
}