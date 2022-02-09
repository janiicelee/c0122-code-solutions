var numberClick = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function countClick(event) {
  numberClick += 1;
  $clickCount.textContent = numberClick;

  if (numberClick < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberClick < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberClick < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberClick < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberClick < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }

  return numberClick;
}

$hotButton.addEventListener('click', countClick, false);
