// Create a multiline string using template literals
const string = `
Line 1
Line 2
Line 3
Line 4
`;

console.log(string);

// Create a function that uses template literals for HTML generation
const gen = (firstName, lastName) => {
  return `<p>Name: ${firstName}</p>
  <p>Surname: ${lastName}</p>
  `;
};

console.log(gen("Sage", "Black"));

// Regular function
function add(a, b) {
  return a + b;
}

// Converted to an arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 10));

// Use arrow functions with array methods
const numbers = [10, 11, 33, 34, 21];

// Filter even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Find numbers greater than 10
const largeNumbers = numbers.filter((num) => num > 10);

console.log("Even Numbers:", evenNumbers);
console.log("Large Numbers:", largeNumbers);
