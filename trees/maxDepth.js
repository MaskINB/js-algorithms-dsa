class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.insertBST(this.root, value);
    }

    insertBST(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertBST(node.left, value);
        } else {
            node.right = this.insertBST(node.right, value);
        }
        return node;
    }

    maxDepth() {
        return this.calculateMaxDepth(this.root);
    }

    calculateMaxDepth(node) {
        if (node == null) {
            return 0;
        }

        let leftDepth = this.calculateMaxDepth(node.left);
        let rightDepth = this.calculateMaxDepth(node.right);

        return 1 + Math.max(leftDepth, rightDepth);
    }
}