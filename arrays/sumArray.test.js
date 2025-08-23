import { describe, it, expect } from "vitest";
const sumArray = require('./sumArray');

describe('sumArray function', () => {
    it('should return the sum of all elements in the array', () => {
        expect(sumArray([1, 2, 3, 4])).toBe(10);
        expect(sumArray([5, 5, 5])).toBe(15);
        expect(sumArray([-1, 1])).toBe(0);
    });

    it('should return 0 for an empty array', () => {
        expect(sumArray([])).toBe(0);
    });

    it('should handle arrays with a single element', () => {
        expect(sumArray([42])).toBe(42);
    });
});
