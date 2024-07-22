// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"


function checkThreeAndTwo(array) {
    // Create an object to count occurrences of each element
    const count = {};

    // Iterate through the array and count each element
    for (const element of array) {
        count[element] = (count[element] || 0) + 1;
    }

    // Check if any value occurs exactly three times and another value occurs exactly two times
    const values = Object.values(count);
    return values.includes(3) && values.includes(2);
}


let array = [2, 2, 3, 3, 4, 2];
console.log(checkThreeAndTwo(array))