// Sort an array by value and index
// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5


function sortByValueAndIndex(arr) {
    // Map each element to an object containing the value and its product with the index (1-based)
    const indexedArray = arr.map((value, index) => {
      return {
        value: value,
        product: value * (index + 1) // Index starts at 1, so use (index + 1)
      };
    });
  
    // Sort the array based on the product
    indexedArray.sort((a, b) => a.product - b.product);
  
    // Extract the sorted values from the objects
    return indexedArray.map(item => item.value);
  }

let array = [200, 61, 34];
console.log(sortByValueAndIndex(array));