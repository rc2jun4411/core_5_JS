/* C:\Users\rc2ju\OneDrive\Documents\core_5_JS\core_52.2.1_Variables blink text\index.js */

/* ex-50.5,  */
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

/* button Press meをclickすると一回実行される。
   countが+1される。*/

// mod. Gemini A1
/* JS: wrap the count inside a <span> element */
buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.innerHTML = `<span class="count-red">${count}
                        </span> clicks so far`;
  count += 1;
};   

// old
// buttonA.onclick = () => {
//   buttonA.textContent = "Try again!";
//   headingA.textContent = `${count} clicks so far`;
//   count += 1;
// };

/* ex-50.6 */
// Google AI
