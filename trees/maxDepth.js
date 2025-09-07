function maxDepth(node){
    if(node == null){
        return 0;
    }

    const leftDepth = maxDepth(node.left);
    const rightDepth = maxDepth(node.right);

    return 1 + Math.max(leftDepth, rightDepth);
}