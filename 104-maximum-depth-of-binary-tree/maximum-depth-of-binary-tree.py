# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        result = 0
        if root is None:
            return result
        
        queue = deque([root])

        while queue:
            queue_size = len(queue)
            level = []

            for _ in range(queue_size):
                node = queue.popleft()
                level.append(node.val)

                if node.left is not None:
                    queue.append(node.left)
                if node.right is not None:
                    queue.append(node.right)
            result += 1 if len(level) > 0 else 0
        return result