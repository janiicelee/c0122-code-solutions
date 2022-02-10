
var $taskList = document.querySelector('.task-list');

function getTaskList(event) {
  console.log(event.target);
  console.log(event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    console.log(event.target.closest('.task-list-item'));
    $taskList.removeChild(event.target.parentNode);
  }
}

$taskList.addEventListener('click', getTaskList, false);
