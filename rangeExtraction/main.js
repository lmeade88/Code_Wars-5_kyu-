function solution(list) {
    if (list.length === 0) return "";
  
    let result = [];
    let rangeStart = list[0];
    let rangeEnd = list[0];
  
    for (let i = 1; i <= list.length; i++) {
      // Check if the current number is consecutive
      if (list[i] === rangeEnd + 1) {
        rangeEnd = list[i];
      } else {
        // Finalize the current range
        if (rangeEnd - rangeStart >= 2) {
          result.push(`${rangeStart}-${rangeEnd}`);
        } else {
          // Handle cases where there are less than 3 numbers in the range
          for (let j = rangeStart; j <= rangeEnd; j++) {
            result.push(j.toString());
          }
        }
  
        // Start a new range
        rangeStart = list[i];
        rangeEnd = list[i];
      }
    }
  
    return result.join(',');
  }
  
  // Example usage:
  console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
  // Output: "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
  