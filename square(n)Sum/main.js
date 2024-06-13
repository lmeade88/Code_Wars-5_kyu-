// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    // If the array is empty, return 0
    if (numbers.length === 0) {
      return 0;
    } else {
        // Square each number
      let doubled = numbers.map(function(number) {
          return number * number;
      })

       // Sum the squared numbers
      let sum = 0;
      for (let number of doubled) {
          sum += number;
      } 

      // Return the sum
      return sum;
    }
  }
  
// Test cases
let numbers = [1, 2];
console.log(squareSum(numbers)); // Expected output: 5

numbers = [];
console.log(squareSum(numbers)); // Expected output: 0
  