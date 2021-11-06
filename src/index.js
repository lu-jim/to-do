import './styles.css';
import todoList from './todoList.js';
import changeList from './changeList.js';

// Show todoList
document.addEventListener('DOMContentLoaded', todoList.showToDo());
document.querySelector('#to-do').addEventListener('click', (e) => {
  changeList(e.target);
});
// Add Task
todoList.createToDo();
// Clear all
document.querySelector('.list-refresh').addEventListener('click', () => {
  todoList.clearAll();
  todoList.reset();
  todoList.showToDo();
});
// Clear completed
document.querySelector('#list-clear').addEventListener('click', () => {
  todoList.clearCompleted();
  todoList.reset();
  todoList.showToDo();
});
