// Create a global variable
let globalCount = 10;

// Function that demonstrates local scope
function showLocalScope() {
  // Local variable
  let localCount = 5;

  console.log("Global variable:", globalCount);
  console.log("Local variable:", localCount);
}

// Function that modifies variables
function modifyVariables() {
  // Modify global variable
  globalCount++;

  // Local variable only exists inside this function
  let localCount = 20;

  localCount++;

  console.log("Modified globalCount:", globalCount);
  console.log("Modified localCount:", localCount);
}

showLocalScope();
modifyVariables();

// Student constructor function
function Student(firstName, lastName, age, course) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.course = course;
}

// Create student instances
const student1 = new Student("Sage", "Smith", 21, "Full Stack Development");
const student2 = new Student("John", "Doe", 19, "Web Design");
const student3 = new Student("Sarah", "Jones", 22, "Cyber Security");

console.log(student1);
console.log(student2);
console.log(student3);

// Object literal with nested properties
const person = {
  firstName: "Sage",
  lastName: "Smith",

  address: {
    street: "12 Main Street",
    city: "Johannesburg",
    country: "South Africa",
  },

  hobbies: {
    indoor: "Reading",
    outdoor: "Cycling",
  },
};

console.log(person.address.city);
console.log(person.hobbies.indoor);
