/* C:\Users\rc2ju\Documents\VScode_edit\core_5_JS\core_52.1.9-2_Conditionals\index.js */

/* ex-50.35, Conditionals */
// see ref. 12
// ・A note on comparison operators
/* 
=== and !== 
  — test if one value is identical to, or not identical to, another.
< and > 
  — test if one value is less than or greater than another.
<= and >= 
  — test if one value is less than or equal to, or greater than or equal to, another.
*/
let cheese = "Cheddar";

// case 1
if (cheese === "Cheddar") {
  //console.log("true,","Yay! Cheese available for making cheese on toast.");
} else {
  //console.log("false,","No cheese on toast for you today.");
}
// case 2
if (cheese !== "Cheddar") {
  //console.log("true,","Yay! Cheese available for making cheese on toast.");
} else {
  //console.log("false,","No cheese on toast for you today.");
}
/* =Notes=
 boolean: true(1), false(0)
 undefined, null, 0, 
 NaN（Not a Number）,
 =Notes=
 「数値ではない（非数）」ことを表す特殊なデータや記号のことです。読み方は「ナン」です。)
  NaNが発生する主な例:
  • 文字列と数値の掛け算: "abc" * 3 や "あいう" - 1 など、数字として計算できない文字列で四則演算をした場合。
  • 無効な数学的計算: 0 / 0（ゼロ同士の割り算）や、負の数の平方根を求める計算など。
  • 存在しない値の混入: プログラムで未定義の変数や、数値に変換できないデータを使って計算を行った場合。
*/
  let a = "string" * 2;
  //console.log(a); // return "NaN"
  //console.log(`in template literal, a = ${a}`); // return "NaN"
/*
  an empty string ('') 
*/
  let b = "";
  //console.log(b); // return can't see anything!

// case 3
if (cheese === true) {
  //console.log("true,","comparison type muched");
} else {
  //console.log("false,","comparison type NOT muched");
}

// case 4
if (cheese === false) {
  //console.log("true,","comparison type muched");
} else {
  //console.log("false,","comparison type NOT muched");
}

// case 5, Nesting if...else
let choice = "sunny";
//let temperature = 75; // case true
let temperature = 87; // case false

// let para = "temperature"; // old
// ただの文字列"temperature"(old)ではなく、HTMLのp要素を作成します。
let para1 = document.createElement("p"); 

if (choice === "sunny") {
  if (temperature < 86) {
    para1.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para1.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}  
//console.log(`"temperature = ${temperature}"`);      // "temperature = 75"
//console.log(`"temperature = ${para.textContent}"`); // "temperature = undefined", old
  // para.textContent => undifined　になる？ => ask Gemini
// check:
const subject5 = "case 5, simple if;"; 
const section5 = document.querySelector("#sect5");
const para5 = document.createElement("p");
para5.textContent  = `${subject5}\n`;
para5.textContent += `"temperature = ${temperature}"\n`;
// 【注意】para.textContent (if文の中にある) を結合します。
para5.textContent += `"Result = ${para1.textContent}"\n`;
section5.appendChild(para5);
// case 5, done!


// case 6、Logical operators: AND, OR and NOT  
// case 6.1, && — AND; allows you to chain together two or more 
//        expressions so that all of them have to individually 
//        evaluate to true for the whole expression to return true.
let temperature61 = 85; // case true, if 直下を実行
//let temperature61 = 87; // case false, else-if 直下を実行

if (choice === "sunny" && temperature61 < 86) {
  para1.textContent = `It is ${temperature61} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature61 >= 86) {
  para1.textContent = `It is ${temperature61} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
// check:
const subject61 = "case 6.1, if with && — AND;"; 
const section61 = document.querySelector("#sect61");
const para61 = document.createElement("p");
para61.textContent  = `${subject61}\n`;
para61.textContent += `"temperature61 = ${temperature61}"\n`;
para61.textContent += `"Result = ${para1.textContent}"\n`;
section61.appendChild(para61);
// case 61, done!

// case 6.2, || — OR; allows you to chain together two or more 
//        expressions so that one or more of them have to individually 
//        evaluate to true for the whole expression to return true. 
/* condition-1,
const iceCreamVanOutside = true;
const houseStatus = "on fire";
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly."); // triger this
} else {                                              // either one is true
  console.log("Probably should just stay in then.");
}*/
/* condition-2,
const iceCreamVanOutside = false;
const houseStatus = "on fire";
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly."); // triger this
} else {                                              // either one is true
  console.log("Probably should just stay in then.");
}*/
//condition-3,
const iceCreamVanOutside = false;
const houseStatus = "not on fire";
const subject62 = "case 6.2, if with || — OR ;"; 
// check
const section62 = document.querySelector("#sect62");
const para62 = document.createElement("p");
para62.textContent  = `${subject62}\n`;
para62.textContent += `"iceCreamVanOutside = ${iceCreamVanOutside}"\n`;
para62.textContent += `"houseStatus = ${houseStatus}"\n`;
let msg1 = "You should leave the house quickly.";
let msg2 = "Probably should just stay in then.";
section62.appendChild(para62);

if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log(msg1);
  para62.textContent += `"Result = ${msg1}"\n`;
} else {
  //console.log(msg2); // triger this, both is false
  para62.textContent += `"Result = ${msg2}"\n`;
}

// case 6.3, NOT expressed by the ! operator, can be used to negate an
//        expression. 
//        Let's combine it with OR in the above example: 
const iceCreamVanOutside3 = true;
const houseStatus3 = "on fire";
const subject63 = "case 6.3, if with ! — NOT ;"; 
// check
const section63 = document.querySelector("#sect63");
const para63 = document.createElement("p");
para63.textContent  = `${subject63}\n`;
para63.textContent += `"iceCreamVanOutside3 = ${iceCreamVanOutside3}"\n`;
para63.textContent += `"houseStatus3 = ${houseStatus3}"\n`;
let msg13 = "You should leave the house quickly.";
let msg23 = "Probably should just stay in then.";
section63.appendChild(para63);

if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  //console.log(msg13);
  para63.textContent += `"Result = ${msg13}"\n`;
} else {
  //console.log(msg23); // triger this, NOT(true, true)=false
  para63.textContent += `"Result = ${msg23}"\n`;
}


/* ex-50.36, Conditionals */
// see ref. 12
// ・switch statements, A switch example
const select = document.querySelector("select");
//console.log(select); // return: <select id="weather">
const subject7 = "case 7, ・A switch example ;"; 
// check
const section7 = document.querySelector("#sect7");
const para7 = document.createElement("p");
para7.textContent  = `${subject7}\n`;

section7.appendChild(para7);

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para7.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para7.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para7.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para7.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para7.textContent = "";
  }
}

/* ex-50.37, Conditionals */
// see ref. 12
// ・Turnary operator
const select7 = document.querySelector("#theme");
//console.log(select7);
const html = document.querySelector("html");
document.body.style.padding = "5px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select7.addEventListener("change", () =>
  select7.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);
