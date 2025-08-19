/**
 * Finds the maximum value in an array of numbers
 * @param {number[]} arr - The input array
 * @returns {number|null} - The maximum value or null if array is empty
 */
function findMax(arr) {
    // Check if array is empty
    if (arr.length === 0) {
        return null;
    }

    // Initialize max to the first element
    let max = arr[0];

    // Iterate through the array to find the maximum value
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// Example usage
// const array = [3, 7, 2, 9, 1, 5];
// console.log(findMax(array)); // Output: 9

export default findMax;
