class Solution {
    public int findContentChildren(int[] g, int[] s) {
        PriorityQueue<Integer> greed = new PriorityQueue<>();
        for(int i = 0; i < g.length; i++) {
            greed.add(g[i]);
        }

        PriorityQueue<Integer> children = new PriorityQueue<>();
        for(int i = 0; i < s.length; i++) {
            children.add(s[i]);
        }

        int result = 0;
        while(!children.isEmpty() && !greed.isEmpty()) {
            if(children.peek() >= greed.peek()) {
                result += 1;
                children.poll();
                greed.poll();
            } else {
                children.poll();
            }
        }
        return result;
    }
}