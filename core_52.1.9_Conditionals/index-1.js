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

// ・else if
let subject3 = "step 3,・else if"
const select = document.querySelector("select");
// check:
const section3 = document.querySelector("#sect3");
const para3 = document.querySelector("p");

para3.textContent  = `${subject3}`;
section3.appendChild(para3);

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para3.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para3.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para3.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para3.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para3.textContent = "";
  }
}







/// =Notes=
/// 書き出し文章の一部を赤色字にするには？
/// textContent を innerHTML に変更し、赤色字にしたい部分を <span> タグで囲む
/// para8.innerHTML += `cities8[cities8.length - 1]: ${checkArray_last}, 
///    <span style="color: red;">OVER !!</span> \n`;