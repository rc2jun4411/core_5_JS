/* C:\Users\rc2ju\OneDrive\Documents\core_5_JS\core_52.1.2_numbers and operators\index.js */

/* ex-50.20,  */
// It's all numbers to me;
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
// Useful Number methods;
/* to round your number to a fixed number of decimal places, 
use the toFixed() method. */
const lotsOfDecimal = 1.7665849587;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(lotsOfDecimal, twoDecimalPlaces);
const headingB = document.querySelector("#heading_B");

headingB.innerHTML = `lotsOfDecimal = ${lotsOfDecimal},
                    twoDecimalPlaces = ${twoDecimalPlaces}`;