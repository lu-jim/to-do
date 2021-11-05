import { ToDo } from './ToDo.js';

// Helper functions

class todoList {
  static dummyList = () => {
    const newList = [new ToDo('wash the dishes'), new ToDo('complete the project')];
    newList.forEach((task) => {
      task.index = newList.indexOf(task);
    });
    localStorage.setItem('list', JSON.stringify(newList));
    JSON.parse(localStorage.getItem('list'));
  };

  static getList = () => JSON.parse(localStorage.getItem('list')) || todoList.dummyList();

  static saveToDo = (task) => {
    let list = todoList.getList();
    const newTask = [task];
    list = list.concat(newTask);
    localStorage.setItem('list', JSON.stringify(list));
  };

  static addToDo(task) {
    const list = document.querySelector('#to-do');
    const entry = document.createElement('li');
    entry.className = 'list-item';
    let completedClass;
    if (task.completed) {
      completedClass = 'checked="checked"';
    } else completedClass = '';
    entry.innerHTML = `<input type="checkbox" id="task-${task.index}" class="task-check" ${completedClass}"> ${task.description}`;
    list.appendChild(entry);
  }

  static showToDo() {
    const list = todoList.getList();
    list.forEach((task) => {
      todoList.addToDo(task);
    });
  }

  // Change Status
  static changeBook = (el) => {
    if (el && el.matches('input.task-check')) {
      const updateList = todoList.getList();
      updateList[el.id.replace('task-', '')].completed = !updateList[el.id.replace('task-', '')].completed;
      localStorage.setItem('list', JSON.stringify(updateList));
    }
  };
}

export { todoList as default };
