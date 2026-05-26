//Function that multiplies 3 numbers together
function multipy(num1, num2, num3) {
  return num1 * num2 * num3;
}

let x = 3,
  y = 5,
  z = 23;

console.log(multipy(x, y, z));

//Function that takes minutes and converts them to seconds
function convertToSeconds(minutes) {
  return minutes * 60;
}

let min = 24;

console.log(`${min} minutes is ${convertToSeconds(min)} seconds`);

//Function that takes the temperature in Fahrenheits and converts it to Celsius
function fahrenheitToCelsius(fahrenheits) {
  return (fahrenheit - 32) * (5 / 9);
}

let fahrenheit = 100;

console.log(
  `${fahrenheit} fahrenheit degrees is equal to ${fahrenheitToCelsius(fahrenheit)} celsius degrees.`,
);

//Function that takes a string and returns the reverse of that string
function stringReverse(text) {
  let reverseString = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reverseString += text[i];
  }
  return reverseString;
}
let string1 = "MVEMJSUN";

console.log(stringReverse(string1));

//Function that takes in a string and returns the number of vowels
function countVowels(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (
      text[i] == "a" ||
      text[i] == "e" ||
      text[i] == "i" ||
      text[i] == "o" ||
      text[i] == "u" ||
      text[i] == "A" ||
      text[i] == "E" ||
      text[i] == "I" ||
      text[i] == "O" ||
      text[i] == "U"
    ) {
      count += 1;
    }
  }
  return count;
}

let string2 = "Element";
console.log(`${string2} has ${countVowels(string2)} vowels`);

//Function that takes a number and returns if it a prime or not
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  if (number == 2) {
    return true;
  }

  //If the number has a divisor then it is not a prime number
  for (let i = 3; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

let testCases = [452, 5, 2, 143];

//Using isPrime to check for prime numbers
for (let i = 0; i < testCases.length; i++) {
  console.log(`${testCases[i]} is Prime: ${isPrime(testCases[i])}`);
}
