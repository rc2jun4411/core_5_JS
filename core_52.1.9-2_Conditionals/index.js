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
// ただの文字列(old)ではなく、HTMLのp要素を作成します。
let para = document.createElement("p"); 

if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — 
      nice and sunny. Let's go out to the beach, or the park, 
      and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — 
      REALLY HOT! If you want to go outside, make sure to put
      some sunscreen on.`;
  }
}  
console.log(`"temperature = ${temperature}"`);      // "temperature = 75"
console.log(`"temperature = ${para.textContent}"`); // "temperature = undefined", old
  /* after mod, "temperature = It is 75 degrees outside — 
      nice and sunny. Let's go out to the beach, or the park, 
      and get an ice cream."*/          

  // para.textContent => undifined　になる？ => ask Gemini
// check:
const subject4 = "case 6.1, && — AND"; 
const section4 = document.querySelector("#sect4");
const para4 = document.createElement("p");
para4.textContent  = `${subject4}\n`;
para4.textContent += `"temperature = ${temperature}"\n`;
// 【注意】para.textContent (if文の中にある) を結合します。
para4.textContent += `"Result = ${para.textContent}"\n`;
section4.appendChild(para4);

// case 6、Logical operators: AND, OR and NOT  
// case 6.1, && — AND; allows you to chain together two or more 
//        expressions so that all of them have to individually 
//        evaluate to true for the whole expression to return true.
// case 6.2, || — OR; allows you to chain together two or more 
//        expressions so that one or more of them have to individually 
//        evaluate to true for the whole expression to return true. 
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — 
  nice and sunny. Let's go out to the beach, or the park, and
   get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — 
  REALLY HOT! If you want to go outside, make sure to put some 
  sunscreen on.`;
}





/// =Notes=
/// 書き出し文章の一部を赤色字にするには？
/// textContent を innerHTML に変更し、赤色字にしたい部分を <span> タグで囲む
/// para8.innerHTML += `cities8[cities8.length - 1]: ${checkArray_last}, 
///    <span style="color: red;">OVER !!</span> \n`;

/// console.log(`template literl, <span style="color: red;">OVER !!</span> \n`)
/// NG !