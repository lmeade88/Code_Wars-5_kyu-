// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).

// Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.

// Examples:

// [1,2,0,3] => True
// # Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

// [0,1,2,2,3] => False
// # Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

// [0] => True
// # Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).

function isAllPossibilities(x) {
    const n = x.length;
    for (let i = 0; i <= n - 1; i++) {
        if (!x.includes(i)) {
            return false;
        }
    }
    return true;
}

let x = [0, 1, 2, 3, 5]
console.log(isAllPossibilities(x))