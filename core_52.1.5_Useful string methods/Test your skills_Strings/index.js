/* C:\Users\rc2ju\Documents\VScode_edit\core_5_JS\core_52.1.5_Useful string methods\Test your skills_Strings\index.js */

// mod. Gemini
/* ex-50.30.1, */
const quoteStart 
 = "Don't judge each day by the harvest you reap ";
const quoteEnd 
 = "but by the seeds that you plant.";
const finalQuote 
 = `${quoteStart}${quoteEnd}`;
// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);


/* ex-50.30.2, */
const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

const quoteLength = quote.length;
const index = quote.indexOf(substring);
const revisedQuote = quote.slice(0, index + substring.length + 1);

const section2 = document.querySelector("#sect2");

// 重複を防ぐため、変数の名前を「para2_1」「para2_2」に変更しました
const para2_1 = document.createElement("p");
para2_1.textContent = `The quote is ${quoteLength} characters long.`;

const para2_2 = document.createElement("p");
para2_2.textContent = revisedQuote;

section2.appendChild(para2_1);
section2.appendChild(para2_2);

// old
// /* ex-50.30.1, */
// const quoteStart 
//  = "Don't judge each day by the harvest you reap ";
// const quoteEnd 
//  = "but by the seeds that you plant.";
// const finalQuote 
//  = `${quoteStart}${quoteEnd}`;
// // Don't edit the code below here!

// const section = document.querySelector("section");
// const para1 = document.createElement("p");
// para1.textContent = finalQuote;
// section.appendChild(para1);


// /* ex-50.30.2, */
// const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
// const substring = "green eggs and ham";

// const quoteLength = quote.length;
// const index = quote.indexOf(substring);
// const revisedQuote = quote.slice(0, index + substring.length + 1);

// const section2 = document.querySelector("#sect2");
// section.innerHTML = " ";
// const para1 = document.createElement("p");
// para1.textContent = `The quote is ${quoteLength} characters long.`;
// const para2 = document.createElement("p");
// para2.textContent = revisedQuote;
// section2.appendChild(para1);
// section2.appendChild(para2);

/* ex-50.30.3, */
const quote3 = "I dO nOT lIke gREen eGgS anD HAM";

// Don't edit the code above here!

// Add your code here
let fixedQuote = quote.toLowerCase();
const firstLetter = fixedQuote.slice(0, 1);
fixedQuote = fixedQuote.replace(firstLetter, firstLetter.toUpperCase());
fixedQuote = fixedQuote.replace("green eggs and ham", "pickled onions");
const finalQuote3 = `${fixedQuote}.`;

// Don't edit the code below here!

const section3 = document.querySelector("#sect3");
const para3 = document.createElement("p");
para3.textContent = finalQuote3;
section3.appendChild(para3);

/* ex-50.30.4, */
const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

// Don't edit the code above here!

// Edit the string literal
const myString =
  `Using *, we can work out that if the two shortest sides
  of a right-angled triangle have lengths of * and *, the
  length of the hypotenuse is *.`;

// Don't edit the code below here!

const section4 = document.querySelector("#sect4");
const para4 = document.createElement("p");
para4.textContent = myString;
section4.appendChild(para4);

