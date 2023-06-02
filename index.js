// ALAB 308H.5.4 - JavaScript Total Recall

// A * Q + A

// 1. How do we assign a value to a varible?

/* assign a value to a variable, we use the assignment operator (=) followed by the desired value. */

// 2. How do we change the value of a variable?

/* To change the value of a variable, we reassign a new value using the assignment operator (=). */

// 3. How do we assign an existing variable to a new variable?

/* To assign an existing variable to a new variable, we use the assignment operator (=) followed by the existing variable's name. */

// 4. Remind me, what are declare, assign, and define?

/** Declaration refers to introducing a variable with its name and data type. Assignment is the act of giving a value to a declared variable. Definition involves both declaration and assignment, providing a variable with a name, data type, and initial value. */

// 5. What is pseudocoding and why should you do it?

/* Pseudocoding is writing out the logic of a program using plain language or simplified code. It helps plan and outline the steps of a program before writing actual code. */

// 6 What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing  in code to solve it?

/* The percentage of time spent on problem-solving versus coding may vary, but generally, it is recommended to spend more time (around 70-80%) on thinking and planning the solution and the remaining time on coding itself. */


//B. Strings 

let firstVariable = 'Hello World';
firstVariable = 100;
let secondVariable = firstVariable;
secondVariable = 'Seattle';
console.log(firstVariable) // output 100

let yourName = 'Eyob'
console.log(`Hello, my name is ${yourName}`) // Hello, my name is Eyob.

//C. Booleans

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name', e);
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e,'Kevin');
  console.log((a < b) < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log((a === a) < d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48, '48');

  // D. The Farm

  let animal = 'cow';
  console.log(animal === 'cow'? 'mooooo' : 'Hey! Youre not a cow.')


  //E. Driver's Ed.
  const age = 16;
  console.log(age >= 16 ? 'Here are the keys!' : 'Sorry. youre too young')

  // II. Loops

  for( let i = 0; i <= 10; i++){
    console.log(i)
  }

  for( let i = 10; i <= 400; i++){
    console.log(i)
  }

  let counter = 0
  for( let i = 12; i <= 400; i++){
    if( counter === 3){
      console.log(i)
      counter = 0;
    }
    counter ++
  }

// B. Get Even

for (let i = 1; i< 100; i++){
  if(i % 2 === 0) {
    console.log(`${i} is an even number`)
  }
}

// C. Give Me Five

for (let i = 0; i< 100; i ++) {
  if(i % 3 === 0 && i % 3 === 0){
    console.log(`I found a ${i}. Three is a crowd`)
    console.log(`I found a ${i}. High five`)

  }
  if(i % 5 === 0){
    console.log(`I found a ${i}. High five`)
  }
  if(i % 3 === 0){
    console.log(`I found a ${i}. Three is a crowd`)
  }

}

// D. Savings Account
let bank_account = 0;
for(let i = 1; i <= 10; i ++) {
  bank_account += i
}
console.log(bank_account)

for(let i = 1; i <= 100; i ++){
  bank_account += i*2
}
console.log(bank_account)


// III. Arrays & Control flow
//What are the things in an array called?
/* We call them Elements

// Do Arrays guarantee those things will be in order?
/* Elements can order or not.

// What real-life thing could you model with an array?
/* You can store any data inside in array. Ex string, Numbers, obects, booleon */


const quotes = ['Love what you do','Courage to continue counts','Difficulty breeds opportunity'  ]

// C. Accessing Elements

const randomThings = [1, 10, "Hello", true]

//How do you access the 1st element in the array?
/* We can access  it by looping the array or we can simply write the index next to array name; `randomThings[0]`

//What would you write to access the 3rd element of the array?
/* We can access  it by looping the array or we can simply write the index next to array name; `randomThings[2]` */

// D. Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// Change the value of "Github" to "Octocat".
for(let i =0; i< ourClass.length; i++){
  if(ourClass[i] === 'Github'){
    ourClass[i] = 'Octocat'
  }
}

//Add a new element, "Cloud City" to the array.

ourClass.push('Cloud City')

// Check the value of the array to make sure it updated the array.
console.log(ourClass) // [ 'Salty', 'Zoom', 'Sardine', 'Slack', 'Octocat', 'Cloud City' ]


//E. Mix It Up
const myArray = [5, 10, 500, 20]

//Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push('Aegon', 'Seattle')
//Remove the 5 from the beginning of the array.
myArray.shift()
//Add the string "Bob Marley" to the beginning of the array.
myArray.unshift('Bob Marley')
//Remove the string of your choice from the end of the array.
myArray.pop()
// Reverse this array using Array.prototype.reverse().
myArray.reverse()
console.log(myArray)

// F. Biggie Smalls

let integer = 5;

if(integer < 100) console.log('little number')
else{
  console.log('big number')
}

// G. Monkey in the Middle


if(integer < 5){
  console.log('little number') 
} 
if(integer > 10){
  console.log('big number')
} 
else{
  console.log('monkey')
}

// H. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

//Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6,0,'raybans')
console.log(kristynsCloset)

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset.splice(5,1, 'stained knit hat')
console.log(kristynsCloset)

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0])

// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0])

//Access one item from Thom's accessories array.
console.log(thomsCloset[2][0])

//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, ${thomsCloset[2][0]}!`)

//Get more specific about what kind of PJs Thom is wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[2].splice(2,1,'Footie Pajamas')
console.log(thomsCloset[2])

// Functions

//A. printGreeting
const printGreeting = (name) => {
  return name;
}

console.log(printGreeting('Slimer'))

//B. printCool

const printCool = (name) => {
  return `${name} is cool`
}

console.log(printCool('Captain Reynolds'))

//C. calculateCube

const calculateCube = (n) => {
  return n*n*n
}

console.log(calculateCube(5))

//D. isVowel

const isVowel = (char) => {
  const vowels = ['a', 'e', 'i,', 'o', 'u']
  return vowels.includes(char) ? true : 'not a vowel'
}

console.log(isVowel('b'))

// E. getTwoLengths
const getTwoLengths = (str1, str2) => {
  return [str1.length, str2.length]

}

console.log(getTwoLengths("Hank", "Hippopopalous"))

// F. getMultipleLengths
const getMultipleLengths = (arr) => {
 let newArray = []
  for(let i = 0; i < arr.length; i ++){
    newArray.push(arr[i].length)
  }
  return newArray
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))

// G. maxOfThree

const maxOfThree = (n1, n2, n3) => {
return Math.max(n1, n2, n3)
}

console.log(maxOfThree(6,9,1))

//H. printLongestWord

const printLongestWord = (arr) => {
  let longestWord = ''
  let max = 0
  for(let i =0; i < arr.length; i++){
    if(max <arr[i].length) {
      max = arr[i].length
      longestWord = arr[i]
    }
  }
  return longestWord
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))

// Objects
//Create an object called user.
const user = {
name: 'Bob',
email: 'bob@bob.com',
age: 25,
purchased: []

}

// B. Update the User
//Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
//Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++.

user.email = 'whatsUp@bob.com'
user.age  = user.age + 1

// C. Adding Keys and Values
user.location = 'seattle'

//D. Shopaholic!

user.purchased.push('carboydrates')
user.purchased.push('peace of mind')
user.purchased.push('Merino jodhpurs')

console.log(user.purchased[2])

//E. Object within an Object

user.freind = {
  name: 'kate',
  age:23,
  location: "Portland",
  purchased: []
}

console.log(user.freind.name)
console.log(user.freind.location)

user.freind.age = 55;
user.freind.purchased.push('The One Ring');
user.freind.purchased.push('A latte');

console.log(user.freind.purchased[1])

//F. Loops

for(let x in user){
  console.log(user[x])
}

for(let x in user.freind){
  console.log(user.freind[x])
}

//G. Functions Operating on Objects
const updateUser = () => {
  user.age = user.age + 1;
  user.name = user.name.toUpperCase()
}

updateUser()

const oldAndLoud  = (person) => {
  person.age = person.age + 1;
  person.name = person.name.toUpperCase()
}

console.log(oldAndLoud(user))