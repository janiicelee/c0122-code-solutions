
var $form = document.querySelector('form');

function logSubmit(event) {
  event.preventDefault();
  var messageData = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log(messageData);
  $form.reset();
}

$form.addEventListener('submit', logSubmit);

/* notes

var $contactForm = document.querySelector('#contact-form');

function logSubmit(event) {
  event.preventDefault();
  var messageData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log(messageData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', logSubmit);

*/
