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
    map = {};
    for(let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i
    }

    return _buildTree(inorder, 0, inorder.length - 1, preorder, 0, preorder.length - 1);


    function _buildTree(
        inorder, inorderStart, inorderEnd, preorder, preorderStart, preorderEnd){
            if(inorderStart > inorderEnd || preorderStart > preorderEnd) return null;
            let root = new TreeNode(preorder[preorderStart]);
            let inorderRootIndex = map[root.val];
            let numsLeft = inorderRootIndex - inorderStart;

            root.left = _buildTree(inorder, inorderStart, inorderRootIndex - 1, preorder, preorderStart + 1, preorderStart + numsLeft);

            root.right = _buildTree(inorder, inorderRootIndex + 1, inorderEnd, preorder, preorderStart + numsLeft + 1, preorderEnd);

            return root;

    }

};