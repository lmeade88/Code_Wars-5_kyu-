// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]



let a = [21, 3, 12, 90];

function doubleEveryOther(a) {
    for (let i = 1; i < a.length; i++) {
        if (i % 2 != 0) {
            a[i] = a[i] * 2;
        }
    }
    return a;
  }

console.log(doubleEveryOther(a));