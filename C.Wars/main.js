// A person's full name is usually composed of a first name, middle name and last name; however in some cultures (for example in South India) there may be more than one middle name.

// Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.

// See the pattern below:

// "code wars"            ---> "C.Wars"
// "Barack hussein obama" ---> "B.H.Obama"
// Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.


function getInitialsAndLastName(fullName) {
    // Split the full name into parts
    let nameParts = fullName.trim().split(/\s+/);

    // Initialize an array for initials
    let initials = [];

    // Iterate over all but the last name part
    for (let i = 0; i < nameParts.length - 1; i++) {
        let initial = nameParts[i][0].toUpperCase();
        initials.push(`${initial}.`);
    }

    // Get the last name and format it
    let lastName = nameParts[nameParts.length - 1];
    let formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    // Join the initials with dots and add the last name
    return `${initials.join('')}${formattedLastName}`;
}

getInitialsAndLastName("Liam patrick meade");
