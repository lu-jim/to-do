/**
 * @jest-environment jsdom
 */
import todoList from './src/todoList.js';
import { ToDo } from './src/ToDo.js';

describe('Add Item', () => {
  it('Add item to the DOM', () => {
    document.body.innerHTML = '<div> <ul id="to-do"> </div>';
    todoList.addTask(new ToDo('Finish the project', 0));
    const list = document.querySelectorAll('#to-do li');
    expect(list).toHaveLength(1);
  });

  it('Add item to the local Storage', () => {
    todoList.saveToDo(new ToDo('Finish the project', 0));
    expect(todoList.getList()).toStrictEqual([
      {
        description: 'Finish the project',
        completed: false,
        index: 0,
      },
    ]);
  });
});

describe('Delete item', () => {
  it('Delete item from the DOM', () => {
    document.body.innerHTML = '<div> <ul id="to-do"> <li class="list-item"><a class="delete" id="delete-0"></a> </li></div>';
    todoList.deleteToDo(0);
    todoList.reset();
    todoList.showToDo();
    const list = document.querySelectorAll('#to-do li');
    expect(list).toHaveLength(0);
  });
  it('Delete item from the local storage', () => {
    todoList.saveToDo(new ToDo('Finish the project', 0));
    todoList.deleteToDo('0');
    expect(todoList.getList()).toStrictEqual([]);
  });
});
