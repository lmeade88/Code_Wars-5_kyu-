// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// Notes:
// List size is at least 3.

// All numbers will be positive.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.

// Input >> Output Examples
// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
// Explanation:
// We add two smallest elements (1 + 2), their sum is 3 .

// Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

// Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this.


function minimumSteps(numbers, value) {
    // Sort the array in ascending order to get the smallest numbers first
    let nums_sorted = numbers.sort((a, b) => a - b);
    
    let count = 0;  // To track the number of steps (how many numbers are added)
    let sum = 0;    // To accumulate the sum of the smallest numbers

    // Iterate through the sorted array and sum the smallest numbers
    for (let i = 0; i < nums_sorted.length; i++) {
        sum += nums_sorted[i];  // Add the current smallest number to the sum
        count += 1;             // Increment the step count

        // If the sum becomes greater than or equal to the target value, stop
        if (sum >= value) {
            return count - 1;   // Return the number of steps taken (minus 1, as steps are counted after addition)
        }
    }
}

console.log(minimumSteps([2, 6, 3, 3, 5, 8, 10], 15))