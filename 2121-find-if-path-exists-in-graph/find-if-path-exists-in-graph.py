from collections import deque

class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        visited_nodes = [0 for _ in range(n)]
        nodes = [[] for _ in range(n)] 
        
        for a, b in edges:
            nodes[a].append(b)
            nodes[b].append(a)
        
        visited_nodes[source] = 1
        queue = deque([source])

        while queue:
            current_node = queue.popleft()
            if current_node == destination:
                return True
            else:
                for connected_node in nodes[current_node]:
                    if visited_nodes[connected_node] == 0:
                        queue.append(connected_node)
                        visited_nodes[connected_node] = 1
        return False
