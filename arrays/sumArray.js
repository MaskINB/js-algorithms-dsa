function sumArray(arr) {
    // Method 1: Using reduce
    return arr.reduce((sum, num) => sum + num, 0);
    
    // Method 2: Using a for loop (alternative implementation)
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }
    // return sum;
}