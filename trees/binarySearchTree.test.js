// binarySearchTree.test.js
import { describe, it, expect } from "vitest";
import BinarySearchTree from "./binarySearchTree.js";

describe("Binary Search Tree", () => {
    it("should insert values correctly", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);

        expect(bst.root.value).toBe(10);
        expect(bst.root.left.value).toBe(5);
        expect(bst.root.right.value).toBe(15);
    });
});
