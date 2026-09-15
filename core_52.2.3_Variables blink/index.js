/* C:\Users\rc2ju\OneDrive\Documents\core_5_JS\core_52.2.3_Variables blink\index.js */

/* ex-50.9 */
var blinkEl = document.querySelector('.bl-dig-txt');

setInterval(function() {
  blinkEl.classList.toggle('is-off');
}, 1000);
/* setInterval で visibility を瞬時に切り替え
  CSS アニメーションはフワッとした動きになります。
  setInterval でクラスを付け外し、visibility を 
  hidden / visible で切り替えると、デジタルな
  点滅になります。
  display: none と違い、レイアウト上の領域は残るので
  周囲が崩れません。*/

/* ex-50.10 */
var blinkE2 = document.querySelector('.bl-spd-txt');
var speedSlider = document.querySelector('.bl-spd-slider');
var timerRef = null;

function blinkToggle() {
  blinkE2.classList.toggle('is-off');
}

function startTimer(ms) {
  if (timerRef) clearInterval(timerRef);
  blinkE2.classList.remove('is-off');
  timerRef = setInterval(blinkToggle, ms);
}

speedSlider.addEventListener('input', function() {
  startTimer(Number(speedSlider.value));
});

startTimer(200);
/* clearInterval で間隔を作り直す
  速度を変えるときは、保存しておいたタイマーを 
  clearInterval で止めてから、新しい間隔で 
  setInterval し直します。
  タイマー参照を変数に残しておかないと、
  あとから止められません。*/