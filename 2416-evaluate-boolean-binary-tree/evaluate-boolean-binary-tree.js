/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {
    if(root == null) {
        return ;
    }
    if(root.val === 2) {
        root.val = evaluateTree(root.left) || evaluateTree(root.right);
    } else if(root.val === 3) {
        root.val = evaluateTree(root.left) && evaluateTree(root.right);
    }
    return root.val;
};