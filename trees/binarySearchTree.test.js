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

describe("Binary Search Tree", () => {
    it("should insert values correctly", () => {
        const bst = new BinarySearchTree();
        bst.insert(5);
        bst.insert(7);
        bst.insert(8);

        expect(bst.root.value).toBe(5);
        expect(bst.root.right.value).toBe(7);
        expect(bst.root.right.right.value).toBe(8);
    });
});

describe("Binary Search Tree", () => {
    it("should search for values correctly", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);

        expect(bst.search(10)).toBeTruthy();
        expect(bst.search(5)).toBeTruthy();
        expect(bst.search(15)).toBeTruthy();
        expect(bst.search(7)).toBeFalsy();
    });
});
