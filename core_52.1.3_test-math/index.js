/* C:\Users\rc2ju\Documents\VScode_edit\core_5_JS\core_52.1.3_test-math\index.js */

/* ex-50.27.1, Test, Math 1 */
let finalResult;
let evenOddResult;

const number1 = 4;
const number2 = 8;
const number3 = 12;
const number4 = 8;

const additionResult = number1 + number2;
const subtractionResult = number3 - number4;

finalResult = additionResult * subtractionResult;

evenOddResult = finalResult % 2; /*2で割った余りが0, even偶数 */
console.log(evenOddResult); /*even偶数なら0 => true */

const section = document.querySelector("#sect1");
const para1 = document.createElement("p");

const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;

para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;

  const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";

para2.textContent = evenOddResultCheck;


/*表示 html. <section></section> */
section.appendChild(para1);
section.appendChild(para2);

/* ex-50.27.2, Test, Math 2 */
let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;

result *= result2;
const finalResult1 = result.toFixed(2); /* 小数点以下2桁を表示*/
const finalNumber = Number(finalResult1);

const section2 = document.querySelector("#sect2");
const para11 = document.createElement("p");
para11.textContent = `Your finalResult is ${finalResult1}`;
const para21 = document.createElement("p");
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber is a number type. Well done!"
    : `Oops! finalNumber is not a number.`;
para21.textContent = finalNumberCheck;
section2.appendChild(para11);
section2.appendChild(para21);


/* ex-50.27.3, Test, Math 3 */
// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

// Statement 3: The two passwords match
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

// comparison
const weightComparison = eleWeight < mouseWeight;
const heightComparison = ostrichHeight > duckHeight;
const pwdMatch = pwd1 === pwd2;

// call html tag element
const section3 = document.querySelector("#sect3");
const para13 = document.createElement("p");
const para23 = document.createElement("p");
const para33 = document.createElement("p");

// select text per either true or faule
const weightTest = weightComparison
  ? "True — elephants do weigh less than mice!?"
  : "False — of course an elephant is heavier than a mouse!";
const heightTest = heightComparison
  ? "True — an ostrich is indeed taller than a duck!"
  : "False — apparently a duck is taller than an ostrich!?";
const pwdTest = pwdMatch
  ? "True — the passwords match."
  : "False — the passwords do not match; please check them";

// display paragraphs para13, para23, para33  
para13.textContent = weightTest;
section3.appendChild(para13);
para23.textContent = heightTest;
section3.appendChild(para23);
para33.textContent = pwdTest;
section3.appendChild(para33);
