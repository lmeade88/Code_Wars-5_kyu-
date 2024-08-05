// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []


let results = {"Java": 20, "Ruby": 50, "Python": 70};

function getLanguagesWithHighScores(results) {
    // Convert the object to an array of entries [language, score]
    const entries = Object.entries(results);

    // Filter out languages with scores below 60 and sort by score in descending order
    const filteredAndSorted = entries
        .filter(([language, score]) => score >= 60) // Filter by score
        .sort((a, b) => b[1] - a[1]) // Sort by score in descending order

    // Extract and return the list of languages
    return filteredAndSorted.map(([language, score]) => language);
}

console.log(getLanguagesWithHighScores(results));
