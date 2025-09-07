import { describe, it, expect } from "vitest";
import BinarySearchTree from "./maxDepth.js";

describe("Max Depth of Binary Search Tree", () => {
    it("should return 0 for an empty tree", () => {
        const bst = new BinarySearchTree();
        expect(bst.maxDepth()).toBe(0);
    });

    it("should return 1 for a tree with only a root", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        expect(bst.maxDepth()).toBe(1);
    });

    it("should calculate the correct depth for a balanced tree", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(17);
        expect(bst.maxDepth()).toBe(3);
    });

    it("should calculate the correct depth for an unbalanced tree", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(5);
        bst.insert(3);
        bst.insert(1);
        expect(bst.maxDepth()).toBe(4);
    });

    it("should handle a right-skewed tree", () => {
        const bst = new BinarySearchTree();
        bst.insert(1);
        bst.insert(2);
        bst.insert(3);
        bst.insert(4);
        bst.insert(5);
        expect(bst.maxDepth()).toBe(5);
    });
});
