// task
const remainder = 11 % 3;

// task
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// task

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// task

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// task

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

// task

const myStr = 'I am a "double quoted" string inside "double quotes".'; // Change this line

// task

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// task
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// task

const myStr = "This is the start." + " " + "This is the end."; // Change this line

// task

let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";

// task

// Only change code below this line
const myName = "Denis";
const myStr = "My name is " + myName + "and I am well!";

//task

// Change code below this line
const someAdjective = "hard enough";
let myStr = "Learning to code is ";
myStr += someAdjective;

// task

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// task

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// task

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// task

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// task

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// task

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// task

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks =
  "My " +
  myNoun +
  " is " +
  myAdjective +
  "." +
  " He " +
  myVerb +
  " " +
  myAdverb;
// Only change code above this line

// task

// Only change code below this line
const myArray = ["1", 1];

// task

// Only change code below this line
const myArray = [["Bulls", 2], []];

// task

const myArray = [50, 60, 70];
const myData = myArray[0];

// task

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

//  task

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

// task

// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
myArray.push(["dog", 3]);

// task

// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
const removedFromMyArray = myArray.pop();

//  task

// Setup
const myArray = [
  ["John", 23],
  ["dog", 3],
];

// Only change code below this line

const removedFromMyArray = myArray.shift();

// task

// Setup
const myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

// task

const myList = [
  ["Chocolate Bar", 15],
  ["Chips", 10],
  ["Coke", 8],
  ["Beer", 10],
  ["Lemonade", 100],
];

// task

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

// task

function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(1, 2);

// task

function timesFive(num) {
  return num * 5;
}

// task

// Declare the myGlobal variable below this line
let myGlobal = 10;
var oopsGlobal;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// task

function myLocalScope() {
  // Only change code below this line
  const myVar = "qwe";
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);

//   task

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

// task

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum += 5;
}
// Only change code above this line

addThree();
addFive();

// task

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

// Only change code below this line

// task

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const result = arr.shift();
  return result;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// task

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

//   task

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  return wasThatTrue ? "Yes, that was true" : "No, that was false";

  // Only change code above this line
}

//   task

// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//   task

// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//   task

// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

//   task

// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//   task

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//   task

function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// task

function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//   task

function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//   task

function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//   task
