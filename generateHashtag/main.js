// function generateHashtag(str) {
//     // Trim whitespace from the start and end of the string
//     const trimmedStr = str.trim();
    
//     // If the input is an empty string after trimming, return false
//     if (trimmedStr === "") return false;

//     // Split the string into words, capitalize the first letter of each word, and join them together
//     const capitalizedWords = trimmedStr.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

//     // Add the hashtag at the beginning
//     const hashtag = '#' + capitalizedWords;

//     // If the final result is longer than 140 characters, return false
//     if (hashtag.length > 140) return false;

//     // Return the hashtag
//     return hashtag;
// }


// // Trim whitespace from the start and end of the string
// str = "   my firstname is Liam    "
// trimmedString = str.trim()
// console.log(trimmedString)

// // If the input is an empty string after trimming, return false
// if (trimmedString === "") console.log ("false");


// // Split the string into words, capitalize the first letter of each word, and join them together
// let newString = trimmedString.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
// console.log(newString)

// // Add the hashtag at the beginning


// // If the final result is longer than 140 characters, return false


// // Return the hashtag

let word = " happy birthday ";

let wordArray = word.trim().split(" ");

let sentence = wordArray.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");

let hash = "#" + sentence;

console.log(hash);