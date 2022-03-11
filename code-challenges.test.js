// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.


describe("sequence", () => {
    6
    // Expected output: [1, 1, 2, 3, 5, 8]
   10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(sequence()).toEqual([1, 1, 2, 3, 5, 8])
    expect(sequence()).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})


// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]
//
// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.
// declare a function sequence
// parameter will be numbers
// set a variable to two elements
// create a for loop and -2 rather than the whole length
// then return the array
const sequence = (number) => {
  var array = [1, 1]
  for (let i = 0; i < n-2; i++){
    array.push(array[i]+ (array[i+1]))
  }
  return array
}

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

//a describe method: I will name this sorter because the function will do a lot of sorting. It was only appropriate
describe("sorter", () => {

  // a test/it method: So inside the it method I described what the function will do to the array.
  it("returns an array that has numbers sorted from least to greatest", () => {

    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
  // Expected output: [-9, 7, 9, 199]

  const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
  // Expected output: [-823, 7, 23]


    //an expect method, nested within the test block, so it's going to call on the function sorter and call on the variable name that is set to the array.
    expect(sorter(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(sorter(fullArr2)).toEqual([-823, 7, 23])
  })
})


const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

// declare function sorter
// function will take an array as parameter
const sorter = (array) => {
  // will use .filter to iterate through the array and filter out what is needed
   let arr = array.filter(value => typeof value === "number" && value % 2 !== 0)
   // now i will take that set of number and use this .sort to put it in order
   let arr2 =  arr.sort((a, b) => a - b)
   // returning arr2 will return the new array
   return arr2
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

//a describe method: i will name this test sum
describe("sum", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("returns an array with all the values sum", () => {

    const numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]

    const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]

    const numbersToAdd3 = []
    // Expected output: []


    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(sum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(sum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(sum(numbersToAdd3)).toEqual([])
  })
})


const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

// declare the function sum
// function will take an array and return a new array

const sum = (array) => {
  // use .map so that it can iterate through
  let arr1 = array.map((plus => value => plus += value)(0))
  // i set the value and the plus to each other. if it equal to one thing then it will add to the other
  return arr1
}
