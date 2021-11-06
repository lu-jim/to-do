import todoList from './todoList.js';

const changeList = (el) => {
  if (el && el.matches('input.task-check')) {
    const updateList = todoList.getList();
    updateList[el.id.replace('task-', '')].completed = !updateList[el.id.replace('task-', '')].completed;
    localStorage.setItem('list', JSON.stringify(updateList));
    if (updateList[el.id.replace('task-', '')].completed) {
      el.parentElement.setAttribute('class', 'list-item list-done');
    } else el.parentElement.setAttribute('class', 'list-item');
  }
};

export { changeList as default };
