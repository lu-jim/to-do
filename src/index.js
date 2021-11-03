import './styles.css';

class ToDo {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = 0;
  }
}

const createNode = (type, nodeClass) => {
  const node = document.createElement(type);
  if (nodeClass) node.className = nodeClass;
  return node;
};

const newList = [
  new ToDo('wash the dishes'),
  new ToDo('complete the To Do list project'),
];
const todoUl = document.querySelector('#to-do');
let completedClass;

newList.forEach((item) => {
  item.index = newList.indexOf(item);
  if (item.completed) {
    completedClass = 'checked="checked"';
  } else completedClass = '';
  const todoEntry = createNode('li', 'list-item');
  todoEntry.innerHTML = `<input type="checkbox" ${completedClass}"> ${item.description}`;
  todoUl.appendChild(todoEntry);
});
