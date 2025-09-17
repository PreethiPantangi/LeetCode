class Solution {
    public char findKthBit(int n, int k) {
        String generatedBitString = generateBitString(n, k);
        return generatedBitString.charAt(k-1);
    }

    private static String generateBitString(int n, int k) {
        int size = (int) Math.pow(2, n);
        String[] values = new String[size];
        values[0] = values[1] = "0";
        String result = "";
        for (int i = 1; i <= n; i++) {
            if (values[i] == null) {
                values[i] = values[i-1] + "1" + reverse(invert(values[i-1]));
            }
        }
        result = values[n];
        return result;
    }

    private static String invert(String value) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < value.length(); i++) {
            sb.append((value.charAt(i) == '1' ? "0" : "1"));
        }
        return sb.toString();
    }

    private static String reverse(String value) {
        StringBuilder sb = new StringBuilder(value);
        return sb.reverse().toString();
    }
}