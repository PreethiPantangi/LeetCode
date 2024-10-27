/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    _map = {};
    for(let i = 0; i < inorder.length; i++) {
        _map[inorder[i]] = i;
    }

    return _buildTree(inorder, 0, inorder.length - 1, preorder, 0, preorder.length - 1);

};

var _buildTree = function(inorder, inStart, inEnd, preorder, preStart, preEnd) {
    if(inStart > inEnd || preStart > preEnd) return null;
    let root = new TreeNode(preorder[preStart]); 
    let inorderRootIndex = _map[root.val];
    let numsOnLeft = inorderRootIndex - inStart;

    root.left = _buildTree(inorder, inStart, inorderRootIndex - 1, preorder, preStart + 1, preStart + numsOnLeft);
    root.right = _buildTree(inorder, inorderRootIndex + 1, inEnd, preorder, preStart + numsOnLeft + 1, preEnd);
    return root;
}