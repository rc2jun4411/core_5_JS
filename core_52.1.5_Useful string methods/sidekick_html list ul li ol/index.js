/* C:\Users\rc2ju\Documents\VScode_edit\core_5_JS
     \core_52.1.5_Useful string methods\html list ul\index.js */




/* ref. ex-50.28.4, 
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
*/