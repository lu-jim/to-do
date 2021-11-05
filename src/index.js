/* eslint max-classes-per-file: ["error", 2] */
import './styles.css';
import { createNode } from './completion.js';
// const createNode = require('./completion.js');

class ToDo {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = 0;
  }
}
class todoList {
  static dummyList = () => {
    const newList = [new ToDo('wash the dishes'), new ToDo('complete the project')];
    newList.forEach((task) => {
      task.index = newList.indexOf(task);
    });
    localStorage.setItem('list', JSON.stringify(newList));
    JSON.parse(localStorage.getItem('list'));
    window.location.reload();
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
    const entry = createNode('li', 'list-item');
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

  static clearInput() {
    document.querySelector('#list-input').value = '';
  }
}

// Initialize list
// todoList.dummyList();

// Show List
document.addEventListener('DOMContentLoaded', todoList.showToDo());
document.querySelector('#to-do').addEventListener('click', (e) => {
  if (e.target && e.target.matches('input.task-check')) {
    const updateList = todoList.getList();
    updateList[e.target.id.replace('task-', '')].completed = !updateList[e.target.id.replace('task-', '')].completed;
    localStorage.setItem('list', JSON.stringify(updateList));
  }
});
