/* C:\Users\rc2ju\OneDrive\Documents\core_5_JS\core_52.1.2_numbers and operators\index.js */

/* ex-50.20,  */
// It's all numbers to me;
const myInt = 5;
const myFloat = 6.667;
console.log(myInt, myFloat);

// const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

/* JS: wrap the count inside a <span> element */
// buttonA.onclick = () => {
//   buttonA.textContent = "Try again!";
//   headingA.innerHTML = `<span class="count-red">${count}
//                         </span> clicks so far`;
//   count += 1;
// };  

// headingA.innerHTML = `myInt = ${myInt}`;
// headingA.innerHTML = `myInt = ${typeof myInt}`;

// Gemini, 「値（5）」と「型（number）」を両方表示させたい場合
headingA.innerHTML = `myInt = ${myInt} (${typeof myInt})`;

// Gemini, 改行して表示したい場合
headingA.innerHTML = `値: ${myInt}<br>型: ${typeof myInt}`;

// Gemini, += を使って追記する場合（※上書きせずに後ろへ足す）
headingA.innerHTML = `myInt = ${myInt}`;
headingA.innerHTML += ` (${typeof myInt})`; // += で追記