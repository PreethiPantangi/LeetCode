class Solution {
    public int findComplement(int num) {
        return getComplement(num, 0, 1);
    }

    private int getComplement(int num, int result, int power) {
        if(num == 0) return result;
        
        if(num % 2 == 0) {
            result += power;
        }
        return getComplement(num/2, result, power * 2);
    }
}