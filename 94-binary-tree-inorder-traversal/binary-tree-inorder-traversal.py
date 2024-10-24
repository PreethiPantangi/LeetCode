# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    result = []
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        self.result = []
        self._inorderTraversal(root)
        return self.result
        
    def _inorderTraversal(self, root):
        if root is None:
            return 
        self._inorderTraversal(root.left)
        self.result.append(root.val)
        self._inorderTraversal(root.right)