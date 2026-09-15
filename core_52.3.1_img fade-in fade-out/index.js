/* C:\Users\rc2ju\OneDrive\Documents\core_5_JS\core_52.3.1_img fade-in fade-out\index.js */

/* ex-51.1 */
function fadeIn() {
  const img = document.getElementById("myImage");
  img.classList.remove("fade-out");
  img.classList.add("fade-in");
}

function fadeOut() {
  const img = document.getElementById("myImage");
  img.classList.remove("fade-in");
  img.classList.add("fade-out");
}