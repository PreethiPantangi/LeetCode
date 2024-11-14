# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def checkValid(root, min_val, max_val):
            if not root:
                return True
            if not (root.val > min_val and root.val < max_val):
                return False
            return checkValid(root.left, min_val, root.val) and checkValid(root.right, root.val, max_val)
        return checkValid(root, float("-inf"), float("inf"))