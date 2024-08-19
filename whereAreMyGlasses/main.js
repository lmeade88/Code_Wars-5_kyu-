// Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!

// Please help me out by showing me the index in the list which contains my glasses. They look like two capital Os, with at least one dash in between!

// This means that both O--O and O------------O are valid glasses, but not O----#--O for example!
// Search thoroughly, you might find my glasses in places such as 'dustO-Odust'
// Examples
// ["phone", "O-O", "coins", "keys"] ➞ 1

// ["OO", "wallet", "O##O", "O----O"] ➞ 3

// ["O--#--O", "dustO---Odust", "more dust"] ➞ 1
// Notes
// All lists will include one valid pair of glasses because I swear I dropped them around here somewhere ...
// All elements in the list are strings.


function findGlassesIndex(arr) {
    // Regular expression to match valid glasses pattern
    const glassesPattern = /O-+O/;
    
    // Loop through the array to find the index of the glasses
    for (let i = 0; i < arr.length; i++) {
        if (glassesPattern.test(arr[i])) {
            return i;  // Return the index where the glasses were found
        }
    }
    
    return -1; // In case no valid glasses are found, although the prompt ensures one valid pair
}