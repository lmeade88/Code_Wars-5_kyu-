// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 


let arr = [5, 8, 6, 2];

function minSum(arr) {
    arrSorted = arr.sort((a, b) => a-b);
    let sum = 0;
    let n = arr.length;
    for (let i=0; i < n/2; i++) {
        sum += arr[i] * arr[n - 1 - i];
    }
    return sum;
  }


console.log(minSum(arr));