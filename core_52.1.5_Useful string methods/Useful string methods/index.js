/* C:\Users\rc2ju\Documents\VScode_edit\core_5_JS\core_52.1.4_Strings\index.js */

/* ex-50.28.4, */
// Finding the length of a string, length property
const browserType = "mozilla";
browserType.length;
console.log(browserType, "length = ",browserType.length);
const headingA = document.querySelector("#heading_A");
headingA.innerHTML = `${browserType} length= ${browserType.length}`;

// Retrieving a specific string character
let chr = browserType[browserType.length - 1];
console.log(chr);
const headingB = document.querySelector("#heading_B");
headingB.innerHTML = `word: "${browserType}" charactor
                at [browserType.length - 1=6]: <br>${chr}`;

// Testing if a string contains a substring
const browserType1 = "mozilla";
let checker = browserType1.includes("zilla"); // 含まれている => true
  console.log(checker);

if (browserType1.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
const headingC = document.querySelector("#heading_C");
headingC.innerHTML = `include "zilla" in ${browserType1}? ` ;
headingC.innerHTML += `<br>true(含む) false(含まない): <br>${checker}` ;

// Finding the position of a substring in a string(1)
const tagline = "MDN - Resources for developers, by developers";
let target = "developers"
console.log(tagline.indexOf(target)); // 20
const headingD1 = document.querySelector("#heading_D1");
headingD1.innerHTML = `charactor index for ${target} 
  in the string <br>at: ${tagline.indexOf(target)} ` ;

// Finding the position of a substring in a string(2)
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", 
  firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
const headingD2 = document.querySelector("#heading_D2");
headingD2.innerHTML = `1st charactor index for ${target} 
  in the string <br>at: ${firstOccurrence} <br>` ;
headingD2.innerHTML += `2nd charactor index for ${target} 
  in the string <br>at: ${secondOccurrence} ` ;  

  // Extracting a substring from a string
const browserType2 = "mozilla";
// case 1:
let ext1 = browserType2.slice(1, 4);
      // index 1(o)-2(z)-3(i) => "ozi"を抽出

console.log(ext1); 
const headingE1 = document.querySelector("#heading_E1");
headingE1.innerHTML = `browserType2.slice(1,4): Extract "ozi" 
    from "${browserType2}" resulted => "${ext1}" ` ;

// case 2:
let ext2 = browserType2.slice(2); //not defined ,2nd parameter
console.log(ext2); 
const headingE2 = document.querySelector("#heading_E2");
headingE2.innerHTML = `browserType2.slice(2): Extract "zilla" 
    from "${browserType2}" resulted => "${ext2}" ` ;

  // Changing case
const radData = "My NaMe Is MuD";
let chr_S = radData.toLowerCase();
let chr_L = radData.toUpperCase();

console.log(radData.toLowerCase()); // 全字を小文字に
console.log(radData.toUpperCase()); // 全字を大文字に 
const headingG1 = document.querySelector("#heading_G1");
headingG1.innerHTML = `target: "${radData}"<br> 
   method 'toLowerCase()' convert all characters to lowercase "${chr_S}" ` ;

const headingG2 = document.querySelector("#heading_G2");
headingG2.innerHTML = `target: "${radData}"<br> 
   method 'toUpperCase()' convert all characters to uppercase "${chr_L}" ` ;

  // Updating parts of a string, only one time! use replaceAll():
  //   to change AbortController.
const browserType3 = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"  
const headingH = document.querySelector("#heading_H");
headingH.innerHTML = 
   `target: "moz" with "van" inside of "${browserType3}"<br> 
   using method 'replace()' resulted "${updated}". ` ;

  // Learning challenges, 
  // Filtering greeting messages
const list = document.querySelector("ul");
const greetings = [
  "Happy Birthday!",
  "Merry Christmas my love",
  "A happy Christmas to all the family",
  "You're all I want for Christmas",
  "Get well soon",
];

// working good !!
for (const greeting of greetings) {
  if (greeting.includes("Christmas")) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}

// not working !!
// for (const greeting of greetings) {
//   // Your conditional test needs to go inside the parentheses
//   // in the line below, replacing what's currently there
//   if (greeting) {
//     const listItem = document.createElement("li");
//     listItem.textContent = greeting;
//     list.appendChild(listItem);
//   }
// }
  