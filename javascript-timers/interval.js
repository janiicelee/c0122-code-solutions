var $h1Element = document.querySelector('.countdown-display');
var nIntervId = setInterval(flashText, 1000);

var counter = 4;
function flashText() {

  $h1Element.textContent = counter--;
  if (counter === -1) {
    $h1Element.textContent = 'Earth Below Us~~~~~';
    clearInterval(nIntervId);
  }
}
