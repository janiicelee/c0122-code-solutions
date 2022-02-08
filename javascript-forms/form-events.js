function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var $input = document.querySelector('input');
var $textArea = document.querySelector('textarea');

$input.addEventListener('focus', handleFocus, false);
$input.addEventListener('blur', handleBlur, false);
$input.addEventListener('input', handleInput, false);

$textArea.addEventListener('focus', handleFocus, false);
$textArea.addEventListener('blur', handleBlur, false);
$textArea.addEventListener('input', handleInput, false);
