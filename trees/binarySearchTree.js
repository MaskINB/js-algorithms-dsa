class sturcNode{
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
        this.root = insertBST(this.root, value);
    }
}

function insertBST(node, value) {
    if (node === null) {
        return new sturcNode(value);
    }

    if (value < node.value) {
        node.left = insertBST(node.left, value);
    } else {
        node.right = insertBST(node.right, value);
    }
    return node;
}



