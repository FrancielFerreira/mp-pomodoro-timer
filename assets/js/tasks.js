// Faça a lógica referente as tarefas aqui!
const form = document.querySelector('form');
const btnForm = document.getElementById('add-task');
const inputTask = document.getElementById('new-task');

form.addEventListener('submit', handleTask);
btnForm.addEventListener('click', handleTask);
function handleTask(event) {
  event.preventDefault();
  const taskName = inputTask.value;

  createLiItemTask(taskName);
  saveTask(taskName);
}

function saveTask(taskName) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));

  if (tasks === null) {
    tasks = [];
  }
  tasks.push(taskName);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  inputTask.value = '';
}

function createLiItemTask(textTask) {
  const parentElement = document.querySelector('.tasks-list ol');

  const li = document.createElement('li');
  li.innerText = textTask;

  const span = document.createElement('span');
  span.innerText = 'X';
  li.append(span);

  parentElement.append(li);
}

function insertAllTasksDoc() {
  let savedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (savedTasks) {
    savedTasks.forEach((task) => {
      createLiItemTask(task);
    });
  }
}
insertAllTasksDoc();

const closeTask = document.querySelectorAll('#tasks li span');

closeTask.forEach((close) => {
  close.addEventListener('click', removeTask);
});

function removeTask() {
  this.innerText = '';

  const storageTask = JSON.parse(localStorage.getItem('tasks'));
  const newStorageTask = storageTask.filter((el) => {
    return el !== this.parentElement.innerText;
  });

  localStorage.setItem('tasks', JSON.stringify(newStorageTask));

  console.log(this.parentElement.innerText);
  this.parentElement.remove();
}
