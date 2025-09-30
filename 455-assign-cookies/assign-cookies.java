class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        
        int result = 0;
        int greedIndex = 0;
        int childIndex = 0;
        while(childIndex < s.length && greedIndex < g.length) {
            if(s[childIndex] >= g[greedIndex]) {
                greedIndex += 1;
                result += 1;
            }
            childIndex += 1;
        }
        return result;
    }
}