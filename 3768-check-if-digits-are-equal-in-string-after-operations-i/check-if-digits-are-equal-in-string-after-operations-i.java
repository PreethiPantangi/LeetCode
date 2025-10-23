class Solution {
    public boolean hasSameDigits(String s) {
        String res = s;
        while(res.length() != 2) {
            res = reduceString(res);
        }
        return res.length() == 2 ? (res.charAt(0) == res.charAt(1)) : false;
    }

    private String reduceString(String s) {
        int i = 0;
        int len = s.length();
        String newStr = "";
        while(i+1 < len) {
            int num1 = Integer.parseInt(String.valueOf(s.charAt(i)));
            int num2 = Integer.parseInt(String.valueOf(s.charAt(i+1)));
            newStr += (num1 + num2) % 10; 
            i += 1;
        }
        return newStr;
    }
}