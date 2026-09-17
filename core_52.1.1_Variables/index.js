/* C:\Users\rc2ju\OneDrive\Documents\core_5_JS\core_52.1.1_Variables\index.js */

/* ex-50.9,  */
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

/* button Press meをclickすると一回実行される。
   countが+1される。*/

// mod. Gemini A1
/* JS: wrap the count inside a <span> element */
buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.innerHTML = `<span class="count-red">${count}
                        </span> clicks so far`;
  count += 1;
};   

// old
// buttonA.onclick = () => {
//   buttonA.textContent = "Try again!";
//   headingA.textContent = `${count} clicks so far`;
//   count += 1;
// };

/* ex-50.10,  */
let myName;
let myAge;

// old 
/* =Notes=
  Back when JavaScript was first created, this was the 
only way to declare variables. The design of var is 
confusing and error-prone. So let was created in modern 
versions of JavaScript, a new keyword for creating 
variables that works somewhat differently to var, 
fixing its issues in the process.  */
var myName1;
var myAge1;

//let myName2 = "Chris";
//console.log(myName2);

// ask Gemini
// Q1: JS; console.log(myName2);でconsoleに表示できますが、
//    browser画面に表示するには？
// A1: change the name to your own name 

// const myName2 = "Taro";
// <p>要素を新しく作成
// const newParagraph = document.createElement("p");
// テキストを設定
// newParagraph.textContent = myName2;
// body要素の中に追加
// document.body.appendChild(newParagraph);

// ask Gemini
// A2: html <body>内で<hr class="hr1">の前に表示するには？
// Q2: JavaScript:
const myName2 = "Taro";
// 1. 新しい <p> 要素を作成
const newParagraph = document.createElement("p");
newParagraph.textContent = myName2;
// 2. 挿入する基準となる <hr class="hr1"> 要素を取得
const targetHr = document.querySelector("hr.hr2");
// 3. 親要素(body)の中で、targetHrの直前に新要素を挿入
targetHr.parentNode.insertBefore(newParagraph, targetHr);

/* ex-50.11,  */
// Numbers
let myAge11 = 17;

// Strings
let dolphinGoodbye = "So long and thanks for all the fish";

// Booleans
let iAmAlive = true;
let test = 6 < 3;
console.log(test); // false

// Arrays
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
// =check=
let check_myNameArray = myNameArray[0]; // should return 'Chris'
let check_myNumberArray = myNumberArray[2]; // should return 40
console.log(check_myNameArray); // 'Chris'
console.log(check_myNumberArray); // 40 

// Objects
let dog = { name: "Spot", breed: "Dalmatian" };
// =check=
console.log(dog); // { name: 'Spot', breed: 'Dalmatian' }

/* ex-50.12,  */
let myName3 = "Paul";

myName3 = "Chris";

const section = document.querySelector("#sect2");
const para = document.createElement("p");
para.textContent = myName3;
section.appendChild(para);

/* ex-50.13,  */
let myName4 = "Default";
myName4 = "Chris";
let myAge4 = 42;

const section4 = document.querySelector("#sect3");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = myName4;
para2.textContent = `In 20 years, I will be ${myAge4 + 20}`;
section4.appendChild(para1);
section4.appendChild(para2);
