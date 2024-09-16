// Convert an object into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]


function convertHashToArray(hash) {
    const order = ['age', 'name', 'role']; // Define the desired order of keys
    const array = Object.entries(hash).sort(([key1], [key2]) => {
        return order.indexOf(key1) - order.indexOf(key2);
    });
  
    return array;
}


let arr =  {name: 'Jeremy', age: 24, role: 'Software Engineer'}; 
console.log(convertHashToArray(arr));