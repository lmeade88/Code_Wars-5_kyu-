// We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

function findMissingNumber(sequence) {
    // Calculate the sum of numbers from 0 to 9
    const totalSum = 45;

    // Calculate the sum of the given sequence
    const sequenceSum = sequence.reduce((acc, num) => acc + num, 0);

    // The missing number is the difference between the expected sum and the sequence sum
    return totalSum - sequenceSum;
}

// Example usage
console.log(findMissingNumber([0, 5, 1, 3, 2, 9, 7, 6, 4])); // Output: 8
console.log(findMissingNumber([9, 2, 4, 5, 7, 0, 8, 6, 1])); // Output: 3
