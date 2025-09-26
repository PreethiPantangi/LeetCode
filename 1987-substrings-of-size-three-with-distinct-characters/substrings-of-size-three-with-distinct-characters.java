class Solution {
    public int countGoodSubstrings(String s) {
        int k = 3;
        int i = 0;
        int j = 0;
        int result = 0;
        Map<Character, Integer> map = new HashMap<>();
        while(j < s.length()) {
            map.put(s.charAt(j), map.getOrDefault(s.charAt(j), 0) + 1);

            int len = j - i + 1;
            if (len > k) {
                char c = s.charAt(i);
                map.put(c, map.getOrDefault(c, 0) - 1);
                if (map.get(c) <= 0) {
                    map.remove(c);
                }
                i += 1;
            }
            len = j - i + 1;
            if (len == k && map.size() == k) {
                result += 1;
            }
            j += 1;
        }
        return result;
    }
}