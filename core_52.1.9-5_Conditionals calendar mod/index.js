/* C:\Users\rc2ju\Documents\VScode_edit\core_5_JS\core_52.1.9-4_Conditionals calendar\index.js */

/* ex-50.38, Conditionals */
// see ref. 12
// ・Implementing a basic calendar

// 【大修正】ただの "select" から、確実に月を狙うために "#month" に変更します！
const select = document.querySelector("#month"); 
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

// 【追加】「年」のセレクトボックスをJavaScriptに連れてきます
const yearSelect = document.querySelector("#year");

// 2.2.1: 現在の「年」を自動取得
const currentYear = new Date().getFullYear(); 

// 2.2.2: 前後4年分のループを回して選択肢を作ります
for (let i = -4; i <= 4; i++) {
  const year = currentYear + i;
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  
  if (year === currentYear) {
    option.selected = true;
  }
  
  yearSelect.appendChild(option);
}

// 「月」が変更されたとき
select.addEventListener("change", () => {
  createCalendar(yearSelect.value, select.value);
});

// 「年」が変更されたときもカレンダーを更新する
yearSelect.addEventListener("change", () => {
  createCalendar(yearSelect.value, select.value);
});

// 関数を (year, month) の2つを受け取れるようにパワーアップ！
function createCalendar(year, month) {
  let days = 31;

  // 2.3.1: うるう年の判定
  if (month === "February") {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    days = isLeapYear ? 29 : 28; 
  } 
  else if (
    month === "April" ||
    month === "June" ||
    month === "September" ||
    month === "November"
  ) {
    days = 30;
  }

  // mod.3 added per A2.3.1 from here to
  list.textContent = "";
  h1.textContent = `${year} - ${month}`; // タイトルに年も表示

  // 月の名前を「数字」に変換する配列
  const monthsArr = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthIndex = monthsArr.indexOf(month);

  // ========================================================
  // 💡【Q2.3.4 追加】1日の曜日を調べて、その分だけ前に空白のマス（li）を作る
  // ========================================================
  const firstDayObj = new Date(year, monthIndex, 1);
  const startDay = firstDayObj.getDay(); // 1日の曜日（0:日 〜 6:土）を取得します

  // 1日が始まる曜日まで、中身が空っぽの白い箱（li）を先に並べます
  for (let j = 0; j < startDay; j++) {
    const emptyItem = document.createElement("li");
    emptyItem.style.background = "transparent"; // 背景を透明にします
    emptyItem.style.border = "2px solid transparent"; // 枠線も消します
    list.appendChild(emptyItem);
  }
  // ========================================================
  // there

  //mod.4 「今日の日付のマスだけ背景色を変える」from here to
  // 💡【今日の日付の背景を変えるための準備】
  // パソコンの時計から、本物の「今日」の年・月・日をそれぞれ数字で取得します
  const today = new Date();
  const realYear = today.getFullYear();
  const realMonth = today.getMonth(); // 0〜11の数字
  const realDate = today.getDate();   // 1〜31の数字
  // there

  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");

    // 2.3.2: 各日付の曜日を自動で取得する
    const dateObj = new Date(year, monthIndex, i); 
    
    // 曜日を英語の文字にするための配列
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = dayNames[dateObj.getDay()]; // deleted  (${dayName}) JK 

    // 2.3.3: 「1 (Thu)」のような形でテキストをセット
    listItem.textContent = `${i}`; // deleted  (${dayName}) JK
    
    //mod.4 from here to
    // ========================================================
    // 💡【追加】もし、今作っているマスが「本物の今日」と同じなら
    //    背景色を変える！
    // ========================================================
    // JavaScriptの中の「選択されている年・月」と「ループの数字 i 」が、
    // 本物の「年・月・日」とすべて一致するかを調べます
    if (
      Number(year) === realYear && 
      monthIndex === realMonth && 
      i === realDate
    ) {
      listItem.style.backgroundColor = "#ffeb3b"; // 今日のマスの背景を「鮮やかな黄色」に！
      listItem.style.color = "#333";             // 文字を読みやすくするために「濃いグレー」に！
      listItem.style.fontWeight = "bold";         // 文字を太字に！
      listItem.style.borderColor = "#ff9800";     // 枠線を「オレンジ色」にして目立たせます！
    }
    // ========================================================
    // there

    // mod. JK, add change color text
    // =>blue(when Sat, index=6) or 
    // =>red (when Sun, index=0) ):
    //console.log(dayName);
    if (
      dayName === "Sat" 
    ) {
      listItem.style.color = "#00f";
      listItem.style.fontWeight = "bold";       
    }
    if (
      dayName === "Sun"
    ) {
      listItem.style.color = "#f00";
      listItem.style.fontWeight = "bold";       
    }

    list.appendChild(listItem);
  }
}

// 最初の表示（現在の年と1月でスタート）
select.value = "January";
createCalendar(currentYear, "January");
