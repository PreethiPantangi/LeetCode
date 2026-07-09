class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> map = new HashMap<>();
        List<List<String>> result = new ArrayList<>();
        for(String s : strs) {
            String sortedString = sortString(s);
            map.computeIfAbsent(sortedString, k -> new ArrayList<>()).add(s);
        }
        for(Map.Entry<String, List<String>> entry : map.entrySet())  {
            result.add(entry.getValue());
        }
        return result;
    }

    private String sortString(String s) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }
}