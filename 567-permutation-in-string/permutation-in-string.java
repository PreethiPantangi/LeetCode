class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int[] s1Count = new int[26];
        int [] s2Count = new int[26];

        for (int i = 0; i < s1.length(); i++) {
            s1Count[s1.charAt(i) - 'a'] += 1;
        }

        int k = s1.length();
        int i = 0;
        int j = 0;
        while(j < s2.length()) {
            s2Count[s2.charAt(j) - 'a'] += 1; 
            int len = j - i + 1;
            if (len > k) {
                s2Count[s2.charAt(i) - 'a'] -= 1;
                i += 1;
            }
            len = j - i + 1;
            if (len == k && Arrays.equals(s1Count, s2Count)) {
                return true;
            }
            j += 1;
        }
        return false;
    }
}