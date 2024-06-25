// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
    // Step 1: Add the two numbers
    const sumDecimal = a + b;

    // Step 2: Convert the sum to binary using the `toString` method with base 2
    const sumBinary = sumDecimal.toString(2);

    return (sumBinary);
}

addBinary(2, 3)