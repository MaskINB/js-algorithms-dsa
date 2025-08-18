// reverseArray.test.js
const reverseArray = require('./reverseArray');

test('reverses [1, 2, 3, 4, 5] to [5, 4, 3, 2, 1]', () => {
  expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

test('reverses empty array to empty array', () => {
  expect(reverseArray([])).toEqual([]);
});

test('reverses [10, 20, 30] to [30, 20, 10]', () => {
  expect(reverseArray([10, 20, 30])).toEqual([30, 20, 10]);
});

test('reverses [1] to [1]', () => {
  expect(reverseArray([1])).toEqual([1]);
});
