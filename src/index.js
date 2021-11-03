import './styles.css';

class toDo {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = 0;
  }
}

const newList = [
  new toDo('wash the dishes'),
  new toDo('complete the To Do list project'),
  new toDo('complete Microverse Program'),
];
const todoUl = document.querySelector('#to-do');

newList.forEach((item) => {
  item.index = newList.indexOf(item);
  const todoEntry = document.createElement('li')
  todoEntry.innerHTML = `<input type="checkbox"> ${item.description}`
  todoUl.appendChild(todoEntry);
});
