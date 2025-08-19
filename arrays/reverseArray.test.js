import { describe , test ,it ,expect } from 'vitest';
import reverseArray from './reverseArray.js';

it('reverses [1, 2, 3, 4, 5] to [5, 4, 3, 2, 1]', () => {
  expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

