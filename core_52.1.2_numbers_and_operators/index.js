/* C:\Users\rc2ju\OneDrive\Documents\core_5_JS\core_52.1.2_numbers and operators\index.js */

/* ex-50.20,  */
// ・Everybody loves math
// =It's all numbers to me;
const myInt = 5;
const myFloat = 6.667;
console.log(myInt, myFloat);
const headingA = document.querySelector("#heading_A");

// Gemini, 「値（5）」と「型（number）」を両方表示させたい場合
headingA.innerHTML = `myInt = ${myInt} (${typeof myInt})`;

// Gemini, 改行して表示したい場合
headingA.innerHTML = `値: ${myInt}<br>型: ${typeof myInt}`;

// Gemini, += を使って追記する場合（※上書きせずに後ろへ足す）
headingA.innerHTML = `myInt = ${myInt}`;
headingA.innerHTML += ` (${typeof myInt})`; // += で追記

// 応用編
headingA.innerHTML = `myFloat = ${myFloat}`;
headingA.innerHTML += ` (${typeof myFloat})`; // += で追記

headingA.innerHTML = `myInt = ${myInt},
                    myFloat = ${myFloat}`;


/* ex-50.21,  */
// =Useful Number methods;
/* to round your number to a fixed number of decimal places, 
use the toFixed() method. */
const lotsOfDecimal = 1.7665849587;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(lotsOfDecimal, twoDecimalPlaces);
const headingB = document.querySelector("#heading_B");

headingB.innerHTML = `lotsOfDecimal = ${lotsOfDecimal},
                    twoDecimalPlaces = ${twoDecimalPlaces}`;


/* ex-50.22, */
// =Converting to number data types;
// 
let myNumber = "74";
myNumber = Number(myNumber) + 3;

const headingC = document.querySelector("#heading_C");
headingC.innerHTML = `myNumber = ${myNumber}, variable type: ${typeof myNumber}`;


/* ex-50.23, */
// =Converting to number data types;
// Number.prototype.toString(), Try it, number to string, ref 4.2
let hex1 = hexColor(233);
let hex2 = hexColor(11);

function hexColor(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}
console.log(hexColor(233));
// Expected output: "e9"
console.log(hexColor("11"));
// Expected output: "b"

const headingD = document.querySelector("#heading_D");
headingD.innerHTML = `hexColor = ${hex1}, variable type: ${typeof hex1}`;

// Examples, Using toString(), number to string, ref 4.2
const count = 10;
const count1 =101; // 後述の headingD2で typeof count1.toString()
console.log(count.toString()); // "10"

console.log((17).toString()); // "17"
console.log((17.2).toString()); // "17.2"

const x = 6;
const x1 = 61;
console.log(x.toString(2)); // "110"
console.log((254).toString(16)); // "fe"
console.log((-10).toString(2)); // "-1010"
console.log((-0xff).toString(2)); // "-11111111"

// 1. toString() なし
const headingD1 = document.querySelector("#heading_D1");
headingD1.innerHTML = `count = ${count}, variable type: ${typeof count}`;
// 2. toString() あり
const headingD2 = document.querySelector("#heading_D2");
headingD2.innerHTML = `count1 = ${count1}, variable type: ${typeof count1.toString()}`;


/* ex-50.24, */
// ・Increment and decrement operators;
//    using the increment (++) and decrement (--) operators. 
let num1 = 4;
const headingE = document.querySelector("#heading_E");
headingE.innerHTML = `increment(++) = ${num1}, variable type: ${typeof num1}`;
// num1++;
// headingE.innerHTML = `increment(++) = ${num1}, variable type: ${typeof num1}`;

let num2 = 6;
num2--;
headingE.innerHTML = ` decrement (--) = ${num2}, variable type: ${typeof num2}`;

// ・Assignment operators
/*  "+="  Adds, the value on the right to the variable value 
        on the left, then returns the new variable value

    "-="  Subtracts,
    "*="  Multiplies,
    "/="  Divides,
*/

let x2 = 3; // x2 contains the value 3
let y2 = 4; // y2 contains the value 4
x2 *= y2;   // x2 now contains the value 12


/* ex-50.25, */
// ・Sizing a canvas box
const canvas = document.getElementById("my-canvas");
const para = document.querySelector("p");
const ctx = canvas.getContext("2d");

// Edit the following two lines ONLY
let x3 = 50;
let y3 = 50;

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "green";
ctx.fillRect(10, 10, x3, y3);
para.textContent = `The rectangle/box is ${x3}px wide and ${y3}px high.`;


/* ex-50.26, */
// ・Comparison operators
const btn = document.querySelector("button");
const txt = document.querySelector("#p1");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}
