//Function that takes a number and creates a sum of numbers from 0 to the given numnber
function sum(num) {
  if (isNaN(num)) {
    throw new error("the value passed is not a number");
  }

  let sum = 0;
  for (let i = 0; i <= input; i++) {
    sum += i;
  }

  return sum;
}

console.log(`${sum(100)}`);

//Function that takes a number and return a factorial of that that number
let fact = 1;
function factorial(number) {
  for (let i = 0; i <= number; i++) {
    fact *= i;
  }

  return fact;
}

console.log(factorial(13));

//Function that takes in two numbers and subtracts the first from the second
function funckyMath(num1, num2) {
  return num2 - num1;
}

//Function that takes in three numbers and adds all three numbers together
function funckyMath(num1, num2, num3) {
  return num2 + num1 + num3;
}

//Function takes in four numbers adds the first and second pair together and divides the sums
function funckyMath(num1, num2, num3, num4) {
  return (num1 + num2) / (num3 + num4);
}

//Remove all the odd numbers from an array
const numbers = [1, 2, 33, 45, 6, 44];
const oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  // Check if the number is odd
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}

oddNumbers.sort((a, b) => a - b);

console.log(oddNumbers);

//Create an object called me
const me = {
  firstName: "Sage",
  lastName: "Smith",
  age: 21,
  favouriteColour: "Blue",
  dreamCar: "Porsche 911",
};

me.favouriteFood = "Pizza";

delete me.age;

console.log(me);
