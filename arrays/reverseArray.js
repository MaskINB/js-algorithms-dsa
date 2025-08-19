// reverseArray.js

/**
 * Reverses an array in place
 * @param {Array} arr - The array to reverse
 * @returns {Array} - The reversed array
 */
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Swap elements
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }

  return arr;
}

// Export function for Jest testing
export default reverseArray;

// Optional: Simple console test
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
