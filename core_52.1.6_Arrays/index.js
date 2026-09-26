/* C:\Users\rc2ju\Documents\VScode_edit\core_5_JS\core_52.1.6_Arrays\Test your skills_Strings\index.js */
// ref.
// mod. Gemini
/* ex-50.30.1, */

/* ex-50.31.1,・Creating arrays */
// strings
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
//console.log(shopping);
const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `array shopping[]: `;
para1.textContent += `${shopping}, OVER !!`;
section.appendChild(para1);

// numbers
const sequence = [1, 1, 2, 3, 5, 8, 13];

// mixed, => multidimensional array
// const random = ["tree", 795, [0, 1, 2]]; //see ex-50.31.3, case 3

/* ex-50.31.2,・Finding the length of an array */
const shopping2 = ["bread", "milk", "cheese", "hummus", "noodles"];
//console.log(shopping2.length);
const section2 = document.querySelector("#sect2");
const para2 = document.createElement("p");
para2.textContent = `array shopping2, [${shopping2}] length: `;
para2.textContent += `${shopping2.length}, OVER !!`;
section2.appendChild(para2);

/* ex-50.31.3,・Accessing and modifying array items */
// case 1:
const shopping3 = ["bread", "milk", "cheese", "hummus", "noodles"];
//console.log(shopping3[0]);
// returns "bread"
const section3 = document.querySelector("#sect3");
const para3 = document.createElement("p");
para3.textContent = `array shopping3, [${shopping3}] \n\n`;
para3.textContent += `case 1, what is array shopping3[0] => `;
para3.textContent += `"${shopping3[0]}" !\n\n `;
section3.appendChild(para3);

// case 2:
shopping3[0] = "tahini";
//console.log(`${shopping3}`);
para3.textContent += `case 2, array shopping3[0] changed, [${shopping3}] \n\n`;

// case 3:
const random = ["tree", 795, [0, 1, 2]];
//console.log(random[2][2]);
para3.textContent += `case 3, random[2][2] => "${random[2][2]}", OVER !!`; // 2 returned

/* ex-50.31.4,・Finding the index of items in an array, indexOf() method */
const birds = ["Parrot", "Falcon", "Owl"];
//console.log(birds.indexOf("Owl")); //  2
//console.log(birds.indexOf("Rabbit")); // -1
const section4 = document.querySelector("#sect4");
const para4 = document.createElement("p");
para4.textContent = `birds.indexOf("Owl"): 
    [${birds.indexOf("Owl")}] \n\n`;    // return "2"
para4.textContent += `birds.indexOf("Rabbit"): 
    [${birds.indexOf("Rabbit")}], OVER !! \n\n`; // return "-1" means not in the array
section4.appendChild(para4);

/* ex-50.31.5,・Adding items */
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");

//console.log(`${cities}`); // return: [ "Manchester", "Liverpool", "Cardiff" ]
const section5 = document.querySelector("#sect5");
const para5 = document.createElement("p");
para5.textContent = `cities[] after push("Cardiff"): [${cities}], OVER !! \n\n`;
section5.appendChild(para5);


/* ex-50.31.6, ・Removing items */
// case 1, pop() method: 
//  To remove the last item from the array
const cities6 = ["Manchester", "Liverpool"];
const removedCity = cities6.pop();
//console.log(cities6); // [ "Manchester" ]
const section6 = document.querySelector("#sect6");
const para6 = document.createElement("p");
para6.textContent = `pop() method:\n  item to be pop()ed: [${removedCity}] \n`; 
para6.textContent += `  cities[] after pop(): [${cities6}] \n\n`; 
section6.appendChild(para6);

// case 2, shift() method: 
//  To remove the first item from the array
const cities61 = ["Manchester", "Liverpool"];
const removedCity6 = cities61.shift();

const section61 = document.querySelector("#sect6");
const para61 = document.createElement("p");
para61.textContent = `shift() method:\n  item to be shift()ed: [${removedCity6}] \n`; 
para61.textContent += `  cities[] after shift(): [${cities61}] \n\n`; 
section61.appendChild(para61);

// case 3-1, splice() method: 
//  To remove an item which known array index,

// mod. Gemini A1:
const cities62 = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
// 正しい配列名「cities62」から検索するように修正しています
const index = cities62.indexOf("Liverpool"); 
// 💡 修正ポイント1: 削除する「前」に、そのアイテムの名前を
// 保存しておきます
let removedItem = "";
if (index !== -1) {
  removedItem = cities62[index]; // ここで "Liverpool" を一時保存
  cities62.splice(index, 1); // ここで配列から削除（削除後はインデックスがずれます）
}

const section62 = document.querySelector("#sect6");
const para62 = document.createElement("p");

// 💡 修正ポイント2: 保存しておいた変数を表示します
para62.textContent = `splice() method: case 3-1\n  item to be splice()ed: [${removedItem}] \n`; 
para62.textContent += `  cities[] after splice(): [${cities62}] \n\n`; 
section62.appendChild(para62);

// old
// const cities62 = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
// const index = cities.indexOf("Liverpool");
// if (index !== -1) { // "Liverpool"があれば、実行
//   cities62.splice(index, 1);
//   // the first argument says where to start removing items, and 
//   // the second argument says how many items should be removed. 
// }


// const section62 = document.querySelector("#sect6");
// const para62 = document.createElement("p");
// para62.textContent = `splice() method:\n  item to be splice()ed: [${cities62[index]}] \n`; 
// para62.textContent += `  cities[] after splice(): [${cities62}] \n\n`; 
// section62.appendChild(para62);

// case 3-2, splice() method: 
//  To remove two(2) items which known array index,
const cities63 = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
// 正しい配列名「cities62」から検索するように修正しています
const index3 = cities63.indexOf("Liverpool"); 
// 💡 修正ポイント1: 削除する「前」に、そのアイテムの名前を
// 保存しておきます
let removedItem3 = "";
if (index3 !== -1) {
  removedItem3 = cities63[index]; // ここで "Liverpool" を一時保存
  cities63.splice(index, 2); // ここで配列から "2 items 削除"（削除後はインデックスがずれます）
}

const section63 = document.querySelector("#sect6");
const para63 = document.createElement("p");

// 💡 修正ポイント2: 保存しておいた変数を表示します
para63.textContent = `splice() method: case 3-2\n  item to be splice()ed: [${removedItem3}] +1 \n`; 
para63.textContent += `  cities[] after splice(): [${cities63}], OVER !!\n\n`; 
section63.appendChild(para63);


/* ex-50.31.7, ・Accessing every item */
// case 1:
const birds71 = ["Parrot", "Falcon", "Owl"];
const section71 = document.querySelector("#sect7");
const para71 = document.createElement("p");
para71.textContent = `case 1, statment: "for...of" in the array "birds7[ ]"\n`;

for (const bird of birds71) {
  //console.log(bird);
  para71.textContent += `[${bird}] \n`; 
  section71.appendChild(para71);
}

// case 2: map() method
function double(number) {
  return number * 2;
}

const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
//console.log(doubled); // [ 10, 4, 14, 12 ]

const section72 = document.querySelector("#sect7");
const para72 = document.createElement("p");
para72.textContent = 
 `case 2, map(doubled) calls the function doubled() 
 once for each item in the array "numbres[ ]" [${numbers}]
 , then apply function double(), resulted =>\n`;
para72.textContent += doubled;
section72.appendChild(para72);

// case 3: filter() method, 8文字以上の市名を選んで返す関数

function isLong(city) {
  return city.length > 8;
}
const cities7 = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities7.filter(isLong);
//console.log(longer); // [ "Liverpool", "Edinburgh" ]

const section73 = document.querySelector("#sect7");
const para73 = document.createElement("p");
para73.textContent =
 `case 3, filter(isLong) calls the function isLong()
  once for each item in the array "cities7[ ]" 
  [${cities7}], then apply function isLong(), resulted =>\n`;
para73.textContent += `${longer}, OVER !!`;
section73.appendChild(para73);


/* ex-50.31.8, ・Converting between strings and arrays
              split() method. */
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"; // string
//console.log(data); 
const cities8 = data.split(","); // converted to array, separated per "," word by word !!
//console.log(cities8);

const section8 = document.querySelector("#sect8");
const para8 = document.createElement("p");
para8.textContent = `data defined as long string with ",": ${data} \n\n`;
para8.textContent += `after split()ed, const cities8 = data.split(",");: ${cities8}\n`;
section8.appendChild(para8);

// check array cities8[ ]
const checkLength = cities8.length;
const checkArray_0 = cities8[0];   // the first item in the array
const checkArray_1 = cities8[1];   // the second item in the array
const checkArray_last = cities8[cities8.length - 1]; // the last item in the array
para8.textContent += `cities8.length: ${checkLength}\n`;
para8.textContent += `cities8[0]: ${checkArray_0}\n`;
para8.textContent += `cities8[1]: ${checkArray_1}\n`;
para8.textContent += `cities8[cities8.length - 1]: ${checkArray_last}, OVER !!\n`;

