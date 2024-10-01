// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 

let arr = [8, 1, 3];

function maxGap (numbers){
    let sorted = numbers.sort((a, b) => a - b);

    let maxDiff = 0;
    for (let i=1; i < sorted.length; i++) {
        let diff = Math.abs(sorted[i] - sorted[i-1]);
        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }

    return maxDiff;
}

console.log(maxGap(arr))