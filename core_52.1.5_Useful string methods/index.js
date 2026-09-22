/* C:\Users\rc2ju\Documents\VScode_edit\core_5_JS\core_52.1.4_Strings\index.js */

/* ex-50.28.1, Single quotes, double quotes, and backticks */
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

/* ex-50.28.2, Embedding JavaScript */
// div2
const name1 = "Chris";
const greeting = `Hello, ${name1}`;
console.log(greeting); // "Hello, Chris"
const headingA = document.querySelector("#heading_A");
// Gemini, += を使って追記する場合（※上書きせずに後ろへ足す）
headingA.innerHTML = `greeting = ${greeting}`;
//headingA.innerHTML += ` (${typeof myInt})`; // += で追記

// div3
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
const headingB = document.querySelector("#heading_B");
headingB.innerHTML = `joined = ${joined}`;

// div4
// VScode integrated browser could not display!
// must be in Chrome.
// click button "Press me", popup prompt("What 
// is your name?") to request keyin your name, 
// keyin name,click "OK", Get return message:
//    `Hello ${name}, nice to see you!`;
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}
button.addEventListener("click", greet);

// div5
// concatenate normal strings using the + operator:
const greeting2 = "Hello";
const name2 = "Bob";
console.log(greeting2 + ", " + name2); // "Hello, Bob"
const headingD = document.querySelector("#heading_D");
headingD.innerHTML = `${greeting2}, ${name2}`;

// div6
// more readable code:
const greeting3 = "Howdy";
const name3 = "Ramesh";
console.log(`${greeting3}, ${name3}`); // "Howdy, Ramesh"
const headingE = document.querySelector("#heading_E");
headingE.innerHTML = `${greeting3}, ${name3}`;

// div7
// Including expressions in strings
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."
const headingF = document.querySelector("#heading_F");
headingF.innerHTML = `${output}`;

// div8
// Numbers vs. strings
const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number); // "Front 242"

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string

const headingG = document.querySelector("#heading_G");
headingG.innerHTML = `${coolBandName} + ${number}`;
