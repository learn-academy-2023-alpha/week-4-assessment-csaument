// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("arrayShuffle", () => {
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]

it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
      expect(arrayShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      expect(arrayShuffle(colors1)).not.toEqual(expect.arrayContaining(["purple"]))
      expect(arrayShuffle(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
      expect(arrayShuffle(colors2)).not.toEqual(expect.arrayContaining(["chartreuse"]))
})
})

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// ReferenceError: arrayShuffle is not defined

// b) Create the function that makes the test pass.

// Create a function that removes the first element and shuffles the remaining elements
// Input: an array
// Output: an array
// Begin by removing the first element of the array using .shift() because this is a mutator method that returns the removed value, perform this operation on a distinct line
// Next, use the .sort() method to shuffle items such that Math.random() returns either a positive or negative response
// Research indicates that this method introduces bias based upon the implementation of Math.random() within different browsers

const arrayShuffle = (array) => {
      array.shift()
      return array.sort(() => 0.5-Math.random())
}


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("talleyVotes", () => {
const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31
it("takes in an object that contains up votes and down votes and returns the end tally", () => {
      expect(talleyVotes(votes1)).toEqual(11)
      expect(talleyVotes(votes2)).toEqual(-31)
})
})

// ReferenceError: talleyVotes is not defined

// b) Create the function that makes the test pass.

// Create a function talleyVotes to count the votes
// Input: an object keys for upVotes and downVotes; values associated with both keys are integers
// Output: a signed integer indicating the total of votes; negative indicates there were more downVotes
// Access the key:value pairs to perform simple arithmetic
const talleyVotes = (obj) => {
      return obj.upVotes - obj.downVotes
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("singleValues", () => {
const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
it("takes in an object that contains up votes and down votes and returns the end tally", () => {
      expect(singleValues(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
})
})

// ReferenceError: singleValues is not defined

// b) Create the function that makes the test pass.

// Create a function to combine arrays and remove duplicate elements
// Input: multiple arrays
// Output: a single array
// Combine the arrays with .concat
// Use the single array to create a new Set, leveraging the magic of math to remove all duplicate values
// Deconstruct the elements from the Set object and return them as values in a new array

const singleValues = (arr1, arr2, ... arrN) => {
      return [... new Set(arr1.concat(arr2, ... arrN))]
}