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

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

//   task

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

//  task

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

// task

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

// task

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

//   task

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }

  return "Change Me";
  // Only change code above this line
}

testSize(7);

//   task

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) {
    return names[0];
  }
  if (strokes <= par - 2) {
    return names[1];
  }

  if (strokes === par - 1) {
    return names[2];
  }

  if (strokes === par) {
    return names[3];
  }

  if (strokes === par + 1) {
    return names[4];
  }

  if (strokes === par + 2) {
    return names[5];
  }

  if (strokes >= par + 3) {
    return names[6];
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

//  task

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "fuct";
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

//   task

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      return "stuff";
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// task

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

//   task

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//   task

function isLess(a, b) {
  // Only change code below this line
  return a < b;
  // Only change code above this line
}

isLess(10, 15);

//   task

// Setup
function abTest(a, b) {
  // Only change code below this line

  if (a < 0 || b < 0) {
    return;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

//   task

let count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6) {
    count++;
  }
  if (card === 10 || typeof card === "string") {
    count--;
  }

  return count > 0 ? count + " Bet" : count + " Hold";
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

// task

const myDog = {
  // Only change code below this line
  name: "13",
  legs: 12,
  tails: 12,
  friends: [],

  // Only change code above this line
};

//   task
// Setup
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line

//   task

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// Only change code below this line
const entreeValue = testObj["an entree"]; // Change this line
const drinkValue = testObj["the drink"]; // Change this line

//   task

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

// Only change code below this line
const playerNumber = 16; // Change this line
const player = testObj[playerNumber]; // Change this line

//  task

// Setup
const myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog.name = "Happy Coder";

// Only change code below this line

// task

const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog.bark = "woof";

// task

// Setup
const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

// Only change code below this line

delete myDog.tails;

// task

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const find = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = find[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

// task

function checkObj(obj, checkProp) {
  // Only change code below this line

  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
  // Only change code above this line
}

// task

const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];

// task

const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// task

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

// task

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value) {
    records[id][prop] = value;
  }
  if (prop === "tracks" && !records[id]["tracks"]) {
    records[id]["tracks"] = [value];
  }
  if (prop === "tracks" && records[id]["tracks"]) {
    records[id]["tracks"].push(value);
  }
  if (!value) {
    delete records[id][prop];
  }

  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");

// task

// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

// task

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

// task

// Setup
const myArray = [];

// Only change code below this line

for (let i = 1; i <= 10; i += 2) {
  myArray.push(i);
}

// task

// Setup
const myArray = [];

// Only change code below this line

for (let i = 9; i >= 0; i -= 2) {
  myArray.push(i);
}

// task

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// task

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// task

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 10);

// task

function sum(arr, n) {
  // Only change code below this line
  if (n === 0) {
    return 0;
  }

  return sum(arr, n - 1) + arr[n - 1];
  // Only change code above this line
}

// task

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  var msg = "No such contact";
  contacts.forEach((item) => {
    if (item.firstName === name && item[prop]) {
      msg = item[prop];
    }
    if (item.firstName === name && !item[prop]) {
      msg = "No such property";
    }
  });
  return msg;

  // Only change code above this line
}

lookUpProfile("Akira", "likes");

//   task

function randomFraction() {
  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

// task

function randomWholeNum() {
  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

// task

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

// task

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// task

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

// task 

function checkEqual(a, b) {
  return a === b ? 'Equal' : 'Not Equal'
 }
 
 checkEqual(1, 2);

//  task 

function checkSign(num) {
  return num > 0 ? 'positive' 
  : num < 0 ? 'negative'
  :'zero'
}

checkSign(10);

// task 

// Only change code below this line
function countdown(n){
  if(n < 0) {
         return []
     }
     if (n <= 1) {
       return n; 
     }
     return [n].concat(countdown(n-1));
 }
 // Only change code above this line

//  task 

function rangeOfNumbers(startNum, endNum) {
  if(startNum >= endNum) {
      return [endNum]; 
  } 
  return [startNum].concat(rangeOfNumbers(startNum+1, endNum));
};


