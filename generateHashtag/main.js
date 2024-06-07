function generateHashtag(str) {
    // Trim whitespace from the start and end of the string
    const trimmedStr = str.trim();
    
    // If the input is an empty string after trimming, return false
    if (trimmedStr === "") return false;

    // Split the string into words, capitalize the first letter of each word, and join them together
    const capitalizedWords = trimmedStr.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    // Add the hashtag at the beginning
    const hashtag = '#' + capitalizedWords;

    // If the final result is longer than 140 characters, return false
    if (hashtag.length > 140) return false;

    // Return the hashtag
    return hashtag;
}

let comment = "hello how are you today"

let splitComment = comment.split()
console.log(splitComment)