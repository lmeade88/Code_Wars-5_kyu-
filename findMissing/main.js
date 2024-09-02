// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// The first array will always have at least one element.

function find_missing(arr1, arr2) {
    // Calculate the sum of both arrays
    const sumArr1 = arr1.reduce((acc, num) => acc + num, 0);
    const sumArr2 = arr2.reduce((acc, num) => acc + num, 0);
    
    // The difference will be the missing number
    return sumArr1 - sumArr2;
}

// Example Usage:
console.log(find_missing([1, 2, 2, 3], [1, 2, 3])); // Output: 2
console.log(find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])); // Output: 8
