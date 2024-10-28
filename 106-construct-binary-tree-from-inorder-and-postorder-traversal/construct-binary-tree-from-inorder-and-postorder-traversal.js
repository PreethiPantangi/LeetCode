/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    map = {};
    for(let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }

    var _buildTree = (inorder, inStart, inEnd, postorder, postStart, postEnd) => {
        if(inStart > inEnd || postStart > postEnd) return null;

        let root = new TreeNode(postorder[postEnd]);
        let inOrderRootIndex = map[root.val];
        let numsOnLeft = inOrderRootIndex - inStart;

        root.left = _buildTree(inorder, inStart, inOrderRootIndex - 1, postorder, postStart, postStart + numsOnLeft - 1);

        root.right = _buildTree(inorder, inOrderRootIndex + 1, inEnd, postorder, postStart + numsOnLeft, postEnd - 1);

        return root;

    };

    return _buildTree(inorder, 0, inorder.length - 1, postorder, 0, postorder.length -1);
};