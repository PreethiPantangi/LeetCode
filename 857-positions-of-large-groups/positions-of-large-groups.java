class Solution {
    public List<List<Integer>> largeGroupPositions(String s) {
        int i = 0;
        int j = 0;
        List<List<Integer>> result = new ArrayList<>();
        while (j < s.length()) {
            if (s.charAt(i) == s.charAt(j)) {
                j += 1;
            } else {
                if(j-i > 2) result.add(new ArrayList<>(Arrays.asList(i, j-1)));
                i = j;
            }
        }
        if(j-i > 2) result.add(new ArrayList<>(Arrays.asList(i, j-1)));
        return result;
    }
}