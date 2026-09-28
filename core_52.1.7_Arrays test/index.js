/* C:\Users\rc2ju\Documents\VScode_edit\core_5_JS\core_52.1.7_Arrays test\index.js */

/* ex-50.32.1, test Arrays 1 */
const myArray  = ["cats", "dogs", "chickens"];
const myArray1 = ["cats", "dogs", "chickens"];

myArray[0] = "horses";          // [0] 変更
myArray[1] = "pigs";            // [1] 変更
myArray.unshift("crocodiles");  // [0]の前=先頭indexに追加

const section = document.querySelector("section");
const para = document.createElement("p");
para.textContent  = `Array(old): ${myArray1}\n`;
para.textContent += `Array(mod): ${myArray}`;
section.appendChild(para);

/* ex-50.32.2, test Arrays 2 */
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

// Add your code here
let myArray2 = myString.split("+");
let arrayLength = myArray2.length;
let lastItem = myArray2[arrayLength - 1];
// Don't edit the code below here!

const section22 = document.querySelector("#sect2");
const para22 = document.createElement("p");
para22.textContent = `String: "${myString}"`;
//console.log(myString); //ok
section22.appendChild(para22);

const section23 = document.querySelector("#sect2");
const para23 = document.createElement("p");
para23.textContent = `The length of the array is ${arrayLength}.`;
section23.appendChild(para23);

const section24 = document.querySelector("#sect2");
const para24 = document.createElement("p");
//console.log(para24); // p
para24.textContent = `The last item in the array is "${lastItem}".`;
section24.appendChild(para24);

// ex-50.32.3, test Arrays 3 */
const myArray3 = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];

myArray3.pop();

myArray3.push("Zangief");
myArray3.push("Ibuki");
//console.log(myArray3); // ok,
// (9) ['Ryu', 'Ken', 'Chun-Li', 'Cammy', 'Guile', 'Sakura', 'Sagat', 'Zangief', 'Ibuki'] 

myArray3.forEach((element, index) => {
  const newElement = `${element} (${index})`;
  myArray3[index] = newElement;
});

const myString3 = myArray3.join(" - ");
//console.log(myString3); // ok,
// Ryu (0) - Ken (1) - Chun-Li (2) - Cammy (3) - Guile (4) - Sakura (5) - Sagat (6) - Zangief (7) - Ibuki (8)

const section31 = document.querySelector("#sect3");
const para31 = document.createElement("p");
//console.log(para31); // ok, p
para31.textContent = myString3;
section31.appendChild(para31);

// ex-50.32.4, test Arrays 4 */
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here
// task 1, 
// Find the index of the "Eagles"
  // see, https://developer.mozilla.org/en-US/docs
  //      /Learn_web_development/Core/Scripting
  //      /Arrays#finding_the_index_of_items_in_an_array 
//console.log(birds.indexOf("Eagles")); // 2

// If you know the index of an item, you can remove it from the array 
// using splice():
// see, https://developer.mozilla.org/en-US/docs
//      /Learn_web_development/Core/Scripting
//      /Arrays#removing_items
const index = birds.indexOf("Eagles"); // 2
if (index !== -1) {
  birds.splice(index, 1);
}
// In this call to splice(), the first argument says 
//  where to start removing items, and the second argument says
//  how many items should be removed. 
// So you can remove more than one item:
//console.log(birds); // ok, ["Parrots", "Falcons", "Emus", "Caracaras", "Egrets"]


// task 2,  
// Make a new array from this one, called eBirds, that contains
// only birds from the original array whose names begin with 
// the letter "E". startsWith()*1 is a great way to check 
// whether a string starts with a given character. 
// *1, ref. https://developer.mozilla.org/en-US/docs/Web/JavaScript
//           /Reference/Global_Objects/String/startsWith 
//console.log(birds.startsWith("E")); // to be returned "true", but error, 
                                      // due to birds is not a string, array?
function startsWithE(bird) {
  return bird.startsWith("E"); // 引数の頭文字が "E" ？ => true, array内に残す。
}
const eBirds = birds.filter(startsWithE); 
// *2, ref. https://developer.mozilla.org/en-US/docs/Web
//          /JavaScript/Reference/Global_Objects/Array/filter



// Don't edit the code below here!
const section4 = document.querySelector("#sect4");
const para41 = document.createElement("p");
para41.textContent = eBirds;
section4.appendChild(para41);