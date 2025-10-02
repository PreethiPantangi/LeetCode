class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length ==1) return strs[0];
        Map<Integer, List<Character>> map = new HashMap<>();
        for (int i = 0; i < strs.length; i++) {
            String str = strs[i];
            for (int j = 0; j < str.length(); j++) {
                map.computeIfAbsent(j, k-> new ArrayList<>()).add(str.charAt(j));
            }
        }
        String result = "";
        for (Map.Entry<Integer, List<Character>> m : map.entrySet()) {
                List<Character> values = m.getValue();
                Set<Character> setValues = new HashSet<>(values);
                if( values.size() == strs.length && setValues.size() == 1) {
                    result += values.iterator().next();
                } else {
                    break;
                }
            }
        return result;
    }
}