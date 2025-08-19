import { describe , test ,it ,expect } from 'vitest';
import reverseArray from './reverseArray.js';

it('reverses [1, 2, 3, 4, 5] to [5, 4, 3, 2, 1]', () => {
  expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});


it ('reverse [10,20,30,40] to [40,30,20,10]',()=> {
  expect (reverseArray([10,20,30,40])).toEqual([40,30,20,10]);
})
