/* C:\Users\rc2ju\Documents\VScode_edit\core_5_JS\core_52.1.9-3_Conditionals ex-50.37 only\index.js */

/* ex-50.37, Conditionals */
// see ref. 12
// ・Turnary operator

// MOD.
const select = document.querySelector("#theme");
const targetSection = document.querySelector("#sect8"); // 変化させたいエリアだけを指定

select.addEventListener("change", () => {
  // 三項演算子：条件 ? 真の処理 : 偽の処理
  select.value === "black" 
    ? (targetSection.style.backgroundColor = "black", targetSection.style.color = "white") 
    : (targetSection.style.backgroundColor = "white", targetSection.style.color = "black");
});

// old
// const select7 = document.querySelector("#theme");
// //console.log(select7);
// const html = document.querySelector("html");
// document.body.style.padding = "5px";

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select7.addEventListener("change", () =>
//   select7.value === "black"
//     ? update("black", "white")
//     : update("white", "black"),
// );
