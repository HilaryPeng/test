/**
 * 判断一棵树是否为平衡二叉树
 */

 var isValidBST = function(root, min = -Infinity, max = Infinity){
     if(root === null ){
         return true;
     }
     if(root.val <= min || root.val >= max){
         return false;
     }
     return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
 }

/**
 * 中序遍历
 * 
 */


var isValidBST = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};