class Solution {
    public int findComplement(int num) {
        String oneComplimentString = getBinary(num);
        return binaryToDecimal(oneComplimentString);
    }

    private String getBinary(int num) {
        if(num == 0) return "";
        return getBinary(num/2) + ((num % 2 == 0) ? "1" : "0");
    }

    private int binaryToDecimal(String value) {
        int decimal = 0;
        int power = 1;
        for(int i = value.length() - 1; i >= 0 ; i--) {
            if(value.charAt(i) == '1') decimal += power;
            power *= 2;
        }
        return decimal;
    }
}