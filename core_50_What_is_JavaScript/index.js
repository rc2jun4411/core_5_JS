/* C:\Users\rc2ju\OneDrive\Documents\core_5_JS\core_50_What_is_JavaScript\index.js*/

/* ex-50.1, A high-level definition*/
function updateName() {
  const name = prompt("Please enter your name"); 
  /* prompt() not supported case VScode integrated browser*/
  button.textContent = `Player 1: ${name}`;
}
const button = document.querySelector("button");
button.addEventListener("click", updateName);


/* ex-50.2, Inline JavaScript handlers */
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}


/* ex-50.3, NOT Inline JavaScript handlers*/
const button3 = document.querySelector('#btn3');
button3.addEventListener('click', createParagraph);