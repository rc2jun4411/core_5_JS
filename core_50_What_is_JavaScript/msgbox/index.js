/* C:\Users\rc2ju\OneDrive\Documents\core_5_JS\core_50_What_is_JavaScript\index.js*/

/* ex-50.4, alert(),
           msgboxをpopupさせるには、下記のcommentを外す */
// window.alert("Hello world!"); 
// alert("Hello world!");

/* ex-50.5, confirm() */
//const res = confirm("続けますか？");


/* ex-50.6, prompt() */
const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

signButton.addEventListener("click", () => {
  let sign = prompt("What's your sign?");

  if (sign === null) {
    log.innerText = "OK, maybe next time.";
  } else if (sign.toLowerCase() === "") {
    log.innerText = "Don't be shy, enter your sign!";
  } else if (sign.toLowerCase() === "scorpio") {
    log.innerText = "Wow! I'm a Scorpio too!";
  } else {
    log.innerText = `${sign} is my favorite!`;
  }
});