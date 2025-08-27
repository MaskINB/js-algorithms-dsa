function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

module.exports = sumArray;

console.log(sumArray([1, 2, 3, 5])); // Output: 11
