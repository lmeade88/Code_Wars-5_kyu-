//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

let myArray = "15 44 2 0 100 9";

function highAndLow(numbers){
    let array = numbers.split(" ");
    const maxNumber = Math.max(...array);
    const minNumber = Math.min(...array);
    
    const result = `${maxNumber} ${minNumber}`;
    return result;
  }

highAndLow(myArray);