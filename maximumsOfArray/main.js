// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation: Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .


function maxProduct(numbers, size){
    let sorted = numbers.sort((a, b) => b - a);
    let sum = 1;
    for (let i=0; i < size; i++) {
        sum *= sorted[i];
    }
    return(sum)
  }

maxProduct([1, 6, 4, 9], 2)
