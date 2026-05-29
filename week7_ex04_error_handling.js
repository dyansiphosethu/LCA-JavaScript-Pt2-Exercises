// Function that validates user input
function validateInput(input) {
  if (input === null || input === undefined) {
    throw new Error("Input cannot be null or undefined.");
  }

  if (typeof input !== "string") {
    throw new TypeError("Input must be a string.");
  }

  if (input.trim() === "") {
    throw new Error("Input cannot be empty.");
  }

  return true;
}

// Function that demonstrates multiple error types
function demonstrateErrors(value) {
  try {
    if (value === null) {
      throw new Error("Error: Value is null.");
    }

    if (typeof value !== "number") {
      throw new TypeError("Error: Value must be a number.");
    }

    if (value < 0) {
      throw new RangeError("Error: Value cannot be negative.");
    }

    console.log("Value is valid:", value);
  } catch (error) {
    console.log(error.name + ": " + error.message);
  }
}

// Helper functions for string manipulation
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function countCharacters(str) {
  return str.length;
}

// Helper functions for array operations
function getSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function getLargest(arr) {
  return Math.max(...arr);
}

function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Input validation
try {
  validateInput("Hello");
  console.log("Input is valid.");
} catch (error) {
  console.log(error.message);
}

// Error demonstrations
demonstrateErrors(null);
demonstrateErrors("hello");
demonstrateErrors(-5);
demonstrateErrors(10);

// String helpers
console.log(capitalize("javascript"));
console.log(reverseString("hello"));
console.log(countCharacters("programming"));

// Array helpers
const numbers = [1, 2, 33, 40, 6, 44];

console.log(getSum(numbers));
console.log(getLargest(numbers));
console.log(getEvenNumbers(numbers));
