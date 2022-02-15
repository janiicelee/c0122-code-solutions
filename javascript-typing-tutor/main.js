var $letters = document.querySelectorAll('span');
var i = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === $letters[i].textContent || event.keyCode === 32) {
    $letters[i].className = 'right';
    i++;
    $letters[i].className = 'black-line';
  } else {
    $letters[i].className = 'wrong';
  }
});
