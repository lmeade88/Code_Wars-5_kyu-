// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// productArray ({12,20}) ==>  return {20,12}
// Explanation:
// The first element in prod [] array 20 is the product of all array's elements except the first element

// The second element 12 is the product of all array's elements except the second element .

// productArray ({1,5,2}) ==> return {10,2,5}
// Explanation:
// The first element 10 is the product of all array's elements except the first element 1

// The second element 2 is the product of all array's elements except the second element 5

// The Third element 5 is the product of all array's elements except the Third element 2.


function productArray(arr) {
    const n = arr.length;
    const leftProd = new Array(n).fill(1);
    const rightProd = new Array(n).fill(1);
    const result = new Array(n);
  
    // Fill leftProd[] such that leftProd[i] contains product of all elements to the left of arr[i]
    for (let i = 1; i < n; i++) {
      leftProd[i] = leftProd[i - 1] * arr[i - 1];
    }
  
    // Fill rightProd[] such that rightProd[i] contains product of all elements to the right of arr[i]
    for (let i = n - 2; i >= 0; i--) {
      rightProd[i] = rightProd[i + 1] * arr[i + 1];
    }
  
    // Construct the result array by multiplying leftProd and rightProd
    for (let i = 0; i < n; i++) {
      result[i] = leftProd[i] * rightProd[i];
    }
  
    return result;
  }
  
  // Example usage:
  const arr = [2, 3, 4];
  console.log(productArray(arr)); // Output: [24, 12, 8, 6]
  