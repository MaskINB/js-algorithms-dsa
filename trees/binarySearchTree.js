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

    search(value) {
        return searchBST(this.root, value);
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

function searchBST(node, value) {
    if (node === null || node.value === value) {
        return node;
    }
    if (value < node.value) {
        return searchBST(node.left, value);
    } else {
        return searchBST(node.right, value);
    }
}
