var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $image = document.querySelector('img');

var $dots = document.querySelectorAll('.fa-circle');
var currentIndex = 0;

var intervalID = setInterval(advanceImage, 3000);

function advanceImage() {
  currentIndex++;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  for (var i = 0; i < images.length; i++) {
    if (currentIndex !== i) {
      $image.setAttribute('src', images[i]);
      $dots[i].setAttribute('class', 'far fa-circle');
    }
  }
  $image.setAttribute('src', images[currentIndex]);
  $dots[currentIndex].setAttribute('class', 'fas fa-circle');
}

var $rightIcon = document.querySelector('#right-icon');
$rightIcon.addEventListener('click', function () {
  clearInterval(intervalID);
  intervalID = setInterval(advanceImage, 3000);
  if (currentIndex <= images.length) {
    $image.setAttribute('src', images[currentIndex + 1]);
    $dots[currentIndex].setAttribute('class', 'far fa-circle');
    currentIndex++;
  }

  if (currentIndex !== i) {
    $dots[currentIndex].setAttribute('class', 'fas fa-circle');
  }

});

var $leftIcon = document.querySelector('#left-icon');
$leftIcon.addEventListener('click', function () {
  clearInterval(intervalID);
  intervalID = setInterval(advanceImage, 3000);
  if (currentIndex > 0) {
    $image.setAttribute('src', images[currentIndex - 1]);
    $dots[currentIndex].setAttribute('class', 'far fa-circle');
    currentIndex--;
  }
  if (currentIndex !== i) {
    $dots[currentIndex].setAttribute('class', 'fas fa-circle');
  }
});

for (var i = 0; i < $dots.length; i++) {
  $dots[i].addEventListener('click', clickDots);
}

function clickDots(event) {
  clearInterval(intervalID);
  intervalID = setInterval(advanceImage, 3000);
  for (var i = 0; i < $dots.length; i++) {
    if (event.target === $dots[i]) {
      $image.setAttribute('src', images[i]);
      $dots[i].setAttribute('class', 'fas fa-circle');
    } else {
      $dots[i].setAttribute('class', 'far fa-circle');
    }
  }
  currentIndex = i;
}
