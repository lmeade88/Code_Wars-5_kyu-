// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



function findShort(s) {
    const words = s.split(" ");
    const shortestLength = Math.min(...words.map(word => word.length));
    const shortestWords = words.filter(word => word.length === shortestLength);

    return shortestLength;
}

let s = "I am the man";
console.log(findShort(s));
