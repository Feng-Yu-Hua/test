// Create the original array.
var arr = [5, "element", 10, "the", true];

// Create an array that contains the string
// values that are in the original array.
var result = arr.filter(
    (value) => (typeof value === 'string')
)

console.log(result)