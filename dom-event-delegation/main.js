
var $taskList = document.querySelector('.task-list');

function getTaskList(event) {
  console.log(event.target);
  console.log(event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var taskListItem = event.target.closest('.task-list-item');
    console.log(taskListItem);
    taskListItem.remove();
  }
}

$taskList.addEventListener('click', getTaskList, false);
