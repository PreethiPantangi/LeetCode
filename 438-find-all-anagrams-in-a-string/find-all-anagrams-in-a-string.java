class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        int[] pCount = new int[26];
        int [] sCount = new int[26];

        for (int i = 0; i < p.length(); i++) {
            pCount[p.charAt(i) - 'a'] += 1;
        }

        int k = p.length();
        List<Integer> result = new ArrayList<>();
        int i = 0;
        int j = 0;
        while(j < s.length()) {
            sCount[s.charAt(j) - 'a'] += 1; 
            int len = j - i + 1;
            if (len > k) {
                sCount[s.charAt(i) - 'a'] -= 1;
                i += 1;
            }
            len = j - i + 1;
            if (len == k && Arrays.equals(pCount, sCount)) {
                result.add(i);
            }
            j += 1;
        }
        return result;
    }

}