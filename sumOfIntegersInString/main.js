// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

function sumOfIntegersInString(input) {
    // Extract all sequences of digits
    let matches = input.match(/\d+/g);
    
    // If there are no matches, return 0
    if (!matches) return 0;

    // Convert matches to numbers and sum them up
    return matches.map(Number).reduce((sum, num) => sum + num, 0);
}

// Example usage
console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog")); // Output: 3635
console.log(sumOfIntegersInString("123abc456")); // Output: 579
console.log(sumOfIntegersInString("a1b2c3")); // Output: 6
console.log(sumOfIntegersInString("no numbers here")); // Output: 0
console.log(sumOfIntegersInString("")); // Output: 0
console.log(sumOfIntegersInString("9876")) // Output: 9876
console.log(sumOfIntegersInString("1a2b3c4d5e6f7g8h9i0")); // Output: 45
console.log(sumOfIntegersInString("1000000000abc1000000000")); // Output: 2000000000
