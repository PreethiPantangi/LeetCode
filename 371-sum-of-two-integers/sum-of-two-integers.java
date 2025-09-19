class Solution {
    public int getSum(int a, int b) {
        int partialSum = a ^ b;
        int carry = (a & b) << 1;
        return partialSum + carry;
    }
}