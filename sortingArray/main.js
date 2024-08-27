// Sort an array according to the indices in another array.
// It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

//     sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
    
//     sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']


function sort(arr, indices) {
    // Create a new array of the same length as arr
    let sortedArray = new Array(arr.length);
    
    // Place elements in sortedArray according to indices
    for (let i = 0; i < arr.length; i++) {
        sortedArray[indices[i]] = arr[i];
    }
    
    return sortedArray;
}


console.log(sort(['x', 'y', 'z'], [1, 0, 2])); 

