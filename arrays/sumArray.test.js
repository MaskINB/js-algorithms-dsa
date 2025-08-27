import sumArray from './sumArray'
import { describe, it, expect } from 'vitest';

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

    it ('should handle arrays with negative numbers', () => {
        expect(sumArray([-1, -2, -3, -4])).toBe(-10);
        expect(sumArray([-5, 5, -5])).toBe(-5);
        expect(sumArray([-1, 1, -1])).toBe(-1);
    });
});
