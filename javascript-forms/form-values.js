
var $form = document.querySelector('form');

function logSubmit(event) {
  var messageData = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log(messageData);
  event.preventDefault();
}

$form.addEventListener('submit', logSubmit);

$form.reset();
