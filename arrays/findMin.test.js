import {describe, it, expect} from 'vitest';
import findMin from './findMin';

it('The findMin function', () => {
    expect(findMin([3, 1, 4, 1, 5, 9])).toBe(1);
    expect(findMin([10, 20, 5, 15])).toBe(5);
    expect(findMin([-1, -5, -3, -2])).toBe(-5);
    expect(findMin([])).toBe(null);
});

