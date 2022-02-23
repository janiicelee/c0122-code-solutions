var $h1Element = document.querySelector('.message');

function helloThere() {
  $h1Element.textContent = 'Hello There';
}

setTimeout(helloThere, 2000);
