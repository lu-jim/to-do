const todoList = {
  getList: () => JSON.parse(localStorage.getItem('list')) || [],

  testList: () => true,
  //  Add task to local storage
  saveToDo: (task, list) => [...list, { description: task, completed: false, index: list.length }],

  // Add task to DOM
  addTask: (task) => {
    const list = document.querySelector('#to-do');
    const entry = document.createElement('li');
    entry.className = 'list-item';
    let completedClass;
    if (task.completed) {
      completedClass = 'checked="checked"';
    } else completedClass = '';
    entry.innerHTML = `<input type="checkbox" id="task-${task.index}" class="task-check" ${completedClass}"> <form class="description-form" id="form-${task.index}"><input type="text" class="list-description" id="description-${task.index}" value='${task.description}'></form> <a ref="" class="delete" id="delete-${task.index}">x</a>`;
    list.appendChild(entry);
  },

  showToDo: (list) => {
    list.forEach((task) => {
      todoList.addTask(task);
      task.index = list.indexOf(task);
    });
  },

  deleteToDo: (index, list) => list.filter((task) => task.index !== index),

  removeToDo: (index, list) => {
    const newList = todoList.deleteToDo(index, list);
    todoList.showToDo(newList);
  },

  clearCompleted: (list) => {
    list = list.filter((task) => !task.completed);
    return list;
  },

  clearAll: () => {
    localStorage.clear();
  },

  reset: () => {
    document.querySelectorAll('.list-item').forEach((e) => e.remove());
  },

  updateList: (index, list) => {
    const newDescription = document.getElementById(`description-${index}`);
    list[`${index}`].description = newDescription.value;
    return list;
  },
  changeList: (el, list) => {
    list[el.id.replace('task-', '')].completed = !list[el.id.replace('task-', '')].completed;
    return list;
  },
};

export { todoList as default };
