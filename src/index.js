import './styles.css';
import todoList from './todoList.js';

// Initialize list

// Show todoList
document.addEventListener('DOMContentLoaded', todoList.showToDo());
document.querySelector('#to-do').addEventListener('click', (e) => {
  todoList.changeBook(e.target);
});
