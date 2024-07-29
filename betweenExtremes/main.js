// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.


function betweenExtremes(numbers) {
    const lowest = Math.min(...numbers);
    const highest = Math.max(...numbers);

    const diff = highest - lowest;
    return diff;
}

let numbers = [1, 1, 2, 2, 4, 4, 16];

console.log(betweenExtremes(numbers));