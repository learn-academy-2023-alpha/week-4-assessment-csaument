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
      expect(isherYates(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      expect(isherYates(colors1)).not.toEqual(expect.arrayContaining(["purple"]))
      expect(isherYates(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
      expect(isherYates(colors2)).not.toEqual(expect.arrayContaining(["chartreuse"]))
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

// There is some discussion that the above implementation does not provide fair distributions. The Fisher-Yates Algorithm and variations are said to provide more consistently random results.

// Create a function isherYates that removes the first element of an array and then shuffles the remaining elements
// Input: an array
// Output: an array
// Removing the first element of the array can be accomplished using .slice(1)
// Create a for loop to iterate through the sliced array
      // Initialize variables i and j
      // Begin at the end of the array and work towards the beginning
      // i is used as the index of the main element
      // during each pass, j is defined as a random number between the beginning and considered element
      // swap the elements at indexes i and j
// Return the resulting array

// const isherYates = (array) => {
//       array = array.slice(1)
//       for(let [i, j] = [array.length - 1, 0]; i > 0; i --) {
//             j = Math.floor(Math.random() * (i + 1))
//             [array[j], array[i]] = [array[i], array[j]]
//       }
//       return array
// }

// Refactored to modify i and j in an array within the third argument passed to for()
// Throws typeError if the input is not an array
const isherYates = (array) => {
      if(! Array.isArray(array)){
            throw TypeError('please pass an array')
      }
      array = array.slice(1)
      for(let [i, j] = [array.length - 1, 0]; i > 0; [i --, j = Math.floor(Math.random() * (i + 1))]) {[array[j], array[i]] = [array[i], array[j]]}
      return array
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.527 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.67s.

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
// Throws type error if any of the elements are not configured properly
// Number.isSafeInteger provides Boolean response on whether a value is a safe integer

const talleyVotes = (obj) => {
      if(typeof obj !== 'object' || ! Number.isSafeInteger(obj.upVotes) || ! Number.isSafeInteger(obj.downVotes)) {
            throw TypeError('input must be an object with key:value pairs; upVotes and downVotes are keys with integers for values')
      }
      return obj.upVotes - obj.downVotes
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.477 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.58s.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("singleValues", () => {
const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
it("takes in an object that contains up votes and down votes and returns the end tally", () => {
      expect(singleValues(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
      // number.concat is not defined
      // expect(singleValues("1", 2)).toEqual(["1", 2])
      // string.concat returns a concatenated string
      // expect(singleValues("1", 2)).toEqual(["1", 2])
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
// Individual elements passed as arguments will also function properly, so long as they are not the first element
// Throws typeError if the first element is not an array

const singleValues = (arr1, arr2, ... arrN) => {
      if(! Array.isArray(arr1)){
            throw TypeError('the first element must be an array')
      }
      return [... new Set(arr1.concat(arr2, ... arrN))]
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.415 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.51s.