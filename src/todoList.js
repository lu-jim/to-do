import { ToDo } from './ToDo.js';

class todoList {
  static getList = () => JSON.parse(localStorage.getItem('list')) || [];

  //  Add task to local storage
  static saveToDo = (task) => {
    const list = [...todoList.getList(), JSON.parse(JSON.stringify(task))];
    localStorage.setItem('list', JSON.stringify(list));
  };

  // Add task to DOM
  static addTask(task) {
    const list = document.querySelector('#to-do');
    const entry = document.createElement('li');
    entry.className = 'list-item';
    let completedClass;
    if (task.completed) {
      completedClass = 'checked="checked"';
    } else completedClass = '';
    entry.innerHTML = `<input type="checkbox" id="task-${task.index}" class="task-check" ${completedClass}"> <form class="description-form" id="form-${task.index}"><input type="text" class="list-description" id="description-${task.index}" value='${task.description}'></form> <a ref="" class="delete" id="delete-${task.index}">x</a>`;
    list.appendChild(entry);
    // Update value
    document.querySelector(`#form-${task.index}`).addEventListener('submit', (e) => {
      todoList.updateList(`${task.index}`);
      e.preventDefault();
      todoList.reset();
      todoList.showToDo();
    });
    // Delete item
    document.querySelector(`#delete-${task.index}`).addEventListener('click', () => {
      todoList.deleteToDo(`${task.index}`);
      todoList.reset();
      todoList.showToDo();
    });
  }

  static showToDo() {
    const list = todoList.getList();
    list.forEach((task) => {
      todoList.addTask(task);
      task.index = list.indexOf(task);
    });
  }

  static clearField = () => {
    document.querySelector('.list-input').value = '';
  };

  static createToDo = () => {
    document.querySelector('#form').addEventListener('submit', (e) => {
      const task = document.querySelector('.list-input').value;
      const newIndex = todoList.getList().length;
      e.preventDefault();

      const todo = new ToDo(task, newIndex);
      todoList.addTask(todo);
      todoList.saveToDo(todo);
      todoList.clearField();
    });
  };

  static deleteToDo = (index) => {
    let list = todoList.getList();
    const numIndex = Number(index);
    list = list.filter((task) => task.index !== numIndex);
    list.forEach((task) => {
      task.index = list.indexOf(task);
    });
    localStorage.setItem('list', JSON.stringify(list));
  };

  static clearCompleted = () => {
    document.querySelector('.list-item');
    let list = todoList.getList();
    list = list.filter((task) => !task.completed);
    list.forEach((task) => {
      task.index = list.indexOf(task);
    });
    localStorage.setItem('list', JSON.stringify(list));
  };

  static clearAll = () => {
    localStorage.clear();
  };

  static reset = () => {
    document.querySelectorAll('.list-item').forEach((e) => e.remove());
  };

  static updateList = (index) => {
    const list = todoList.getList();
    const newDescription = document.getElementById(`description-${index}`);
    list[`${index}`].description = newDescription.value;
    localStorage.setItem('list', JSON.stringify(list));
  };
}

export { todoList as default };
