class Solution {
    public int findCircleNum(int[][] isConnected) {
        int rows = isConnected.length;
        int cols = isConnected[0].length;
        List<List<Integer>> neighbors = new ArrayList<>();

        for(int row = 0; row <= rows; row++) {
            neighbors.add(new ArrayList<>());
        }

        for(int i = 0; i < rows; i++) {
            List<Integer> list = neighbors.get(i+1);
            for(int j = 0; j < cols; j++) {
                if(isConnected[i][j] != 0) list.add(j+1);
            }
        }

        System.out.println(neighbors);

        int[] visited = new int[rows+1];
        int startingNode = 1;
        int provinces = 0;

        for(int i = 1; i <= rows; i++) {
            if(visited[i] == 0) {
                provinces += 1;
                Queue<Integer> queue = new LinkedList<>();
                queue.add(i);

                while(!queue.isEmpty()) {
                    int curr = queue.poll();
                    if(visited[curr] == 0) {
                        visited[curr] = 1;
                        for(int n : neighbors.get(curr)) {
                            if(visited[n] == 0) {
                                queue.add(n);
                            }
                        }
                    }
                }
            }
        }

        return provinces;
    }
}