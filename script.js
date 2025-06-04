const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

let tasks = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const time = document.getElementById('task-time').value;
  const desc = document.getElementById('task-desc').value;

  if (time && desc) {
    tasks.push({ time, desc, done: false });
    tasks.sort((a, b) => a.time.localeCompare(b.time));
    renderTasks();
    form.reset();
  }
});

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.done ? 'done' : '';

    li.innerHTML = `
      <span>${task.time} - ${task.desc}</span>
      <div>
        <button onclick="toggleDone(${index})">✅</button>
        <button onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
