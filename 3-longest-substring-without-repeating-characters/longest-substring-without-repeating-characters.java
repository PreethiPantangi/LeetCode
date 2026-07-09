class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashSet<Character> sett = new HashSet<>();

        int i = 0;
        int j = 0;
        int result = 0;

        while(j < s.length()) {
            Character ch = s.charAt(j);
            if(sett.contains(ch)) {
                sett.remove(s.charAt(i));
                i += 1;
            } else {
                sett.add(ch);
                result = Math.max(result, j - i + 1);
                j += 1;
            }
        }
        return result;
    }
}