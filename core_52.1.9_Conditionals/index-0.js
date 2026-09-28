/* C:\Users\rc2ju\Documents\VScode_edit\core_5_JS\core_52.1.9_Conditionals\index.js */

/* ex-50.34, Conditionals */
// see ref. 12

// ・Basic if...else syntax
let subject1 = "step 1,・Basic if...else syntax"
let condition = true ;
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
// check:
const section1 = document.querySelector("#sect1");
const para1 = document.createElement("p");
para1.textContent  = `${subject1}\n`;
para1.textContent += `condition: ${condition}\n\n`;
section1.appendChild(para1);

// ・A real example
let subject2 = "step 2,・A real example"
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
// check:
const section2 = document.querySelector("#sect2");
const para2 = document.createElement("p");
para2.textContent  = `${subject2}\n`;
para2.textConten  += `shoppingDone ?: ${shoppingDone}\n`;
para2.innerHTML   += `childAllowance: ${childAllowance}, <span style="color: red;">not satisfied !!</span>\n\n`;
section2.appendChild(para2);





/// =Notes=
/// 書き出し文章の一部を赤色字にするには？
/// textContent を innerHTML に変更し、赤色字にしたい部分を <span> タグで囲む
/// para8.innerHTML += `cities8[cities8.length - 1]: ${checkArray_last}, 
///    <span style="color: red;">OVER !!</span> \n`;