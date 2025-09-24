class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        HashMap<Character, Integer> lastSeen = new HashMap<>();
        int left = 0;
        int right = 0;
        int maxLen = 0;
        while (right < s.length()) {
            char ch = s.charAt(right);
            if (map.get(ch) == null || map.get(ch) == 0) {
                map.put(ch, 1);
                lastSeen.put(ch, right);
                maxLen = Math.max(maxLen, right-left+1);
            } else {
                map.put(ch, map.get(ch)-1);
                map.put(ch, map.get(s.charAt(right))+1);
                left = Math.max(left, lastSeen.get(ch) + 1);
                lastSeen.put(ch, right);
                maxLen = Math.max(maxLen, right - left + 1);
            }
            right += 1;
        }
        return maxLen;
    }
}