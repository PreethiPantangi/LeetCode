/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        List<Integer> subRootPreOrder = new ArrayList<>();
        getPreOrder(subRoot, subRootPreOrder);

        Stack<TreeNode> stack = new Stack<>();
        addNodesToStack(root, stack);

        while(!stack.isEmpty()) {
            List<Integer> preOrder = new ArrayList<>();
            getPreOrder(stack.pop(), preOrder);
            if(subRootPreOrder.equals(preOrder)) return true;
        }
        return false;
    }

    private void addNodesToStack(TreeNode node, Stack<TreeNode> stack) {
        if(node == null) return;
        stack.add(node);
        addNodesToStack(node.left, stack);
        addNodesToStack(node.right, stack);
    }

    private void getPreOrder(TreeNode node, List<Integer> preOrder) {
        if(node == null) {
            preOrder.add(null);
            return;
        }
        preOrder.add(node.val);
        getPreOrder(node.left, preOrder);
        getPreOrder(node.right, preOrder);
    }
}