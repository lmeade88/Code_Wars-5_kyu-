// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)


function minValue(values){
    new_array = [...new Set(values)];
    sorted = new_array.sort((a, b) => a-b);
    min = Number(sorted.join(""));
    return min;
  }

console.log(minValue([1, 3, 1]))