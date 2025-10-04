class Solution {
    public int countSubstrings(String s) {
        int count = 0;

        for (int i = 0; i < s.length(); i++) {
            String subString = "";
            for (int j = i; j < s.length(); j++) {
                subString += s.charAt(j);
                if (isPalindrome(subString)) {
                    count += 1;
                }
            }
        }
        return count;
    }

    private static boolean isPalindrome(String str) {
        int i = 0;
        int j = str.length() - 1;
        while (i < j) {
            if (str.charAt(i) != str.charAt(j)) return false;
            i += 1;
            j -= 1;
        }
        return true;
    }
}