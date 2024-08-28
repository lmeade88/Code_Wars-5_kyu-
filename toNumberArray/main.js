// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray) {
    let numberArray = [];

    for (let i=0; i < stringarray.length; i++) {
        numberArray.push(Number(stringarray[i]));
    }

    return numberArray;
}

let nums = ["9", "3", "5"];
console.log(toNumberArray(nums));

// ALTERNATIVE //

const toNumberArray = stringarray => stringarray.map(Number);