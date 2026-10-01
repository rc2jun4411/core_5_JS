/* C:\Users\rc2ju\Documents\VScode_edit\core_5_JS\core_52.1.9-4_Conditionals calendar\index.js */

/* ex-50.38, Conditionals */
// see ref. 12
// ・Implementing a basic calendar
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

// added per A2.2 from here to
// 【追加】「年」のセレクトボックスをJavaScriptに連れてきます
const yearSelect = document.querySelector("#year");

// 2.2.1: 現在の「年」を自動取得（2026年が取れます）
const currentYear = new Date().getFullYear(); 
//console.log(currentYear); confirm return 2026 ok

// 2.2.2: 前後4年分（マイナス4年からプラス4年まで）のループを回して選択肢を作ります
for (let i = -4; i <= 4; i++) {
  const year = currentYear + i;
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  
  // もしループ中の年が「現在の年（2026）」と同じなら、最初から選択状態（selected）にします
  if (year === currentYear) {
    option.selected = true;
  }
  
  yearSelect.appendChild(option);
}
// there

// old
// select.addEventListener("change", () => {
//   const choice = select.value;
//   createCalendar(choice);
// });

// mod. A2.3 from here to
// 「月」が変更されたとき
select.addEventListener("change", () => {
  createCalendar(yearSelect.value, select.value);
});

// 【追加】「年」が変更されたときもカレンダーを更新する
yearSelect.addEventListener("change", () => {
  createCalendar(yearSelect.value, select.value);
});
// there

// old
// function createCalendar(month) {
//   let days = 31;

//   if (month === "February") 
//     {
//     days = 28;
//   } 
//   else if (
//     month === "April" ||
//     month === "June" ||
//     month === "September" ||
//     month === "November"
//   ) {
//     days = 30;
//   }

//   list.textContent = "";
//   h1.textContent = month;
//   for (let i = 1; i <= days; i++) {
//     const listItem = document.createElement("li");
//     listItem.textContent = i;
//     list.appendChild(listItem);
//   }
// }

// mod. A2.3 from here to
// 関数を (year, month) の2つを受け取れるようにパワーアップ！
function createCalendar(year, month) {
  let days = 31;

  // 2.3.1: うるう年の判定（年が4で割り切れて、100で割り切れない、または400で割り切れる）
  if (month === "February") {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    days = isLeapYear ? 29 : 28; // うるう年なら29日、違えば28日
  } 
  else if (
    month === "April" ||
    month === "June" ||
    month === "September" ||
    month === "November"
  ) {
    days = 30;
  }

  list.textContent = "";
  h1.textContent = `${year} - ${month}`; // タイトルに年も表示

  // 月の名前を「数字」に変換する配列（Dateオブジェクトで使うため。1月は0、2月は1...）
  const monthsArr = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthIndex = monthsArr.indexOf(month);

  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");

    // 2.3.2: 各日付の曜日を自動で取得する
    // 例: 2026年1月1日の曜日オブジェクトを作る
    const dateObj = new Date(year, monthIndex, i); 
    
    // 曜日を日本語や英語の文字にするための配列
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = dayNames[dateObj.getDay()]; // 0が日曜日、6が土曜日を返します

    // 2.3.3: 「1 (Thu)」のような形でテキストをセット
    listItem.textContent = `${i} (${dayName})`;
    
    list.appendChild(listItem);
  }
}

// 最初の表示（現在の年と1月でスタート）
select.value = "January";
createCalendar(currentYear, "January");
// there