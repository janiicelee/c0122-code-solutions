var $lightBulb = document.querySelector('.light-bulb');
var $background = document.querySelector('.background');
var switchOff = true;

function lightOn(event) {
  if (switchOff) {
    $lightBulb.className = 'light-bulb on';
    $background.className = 'background on';
  } else {
    $lightBulb.className = 'light-bulb off';
    $background.className = 'background off';
  }

  switchOff = !switchOff;
}

$lightBulb.addEventListener('click', lightOn, false);
