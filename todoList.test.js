/**
 * @jest-environment jsdom
 */
import { expect, jest } from '@jest/globals';
import todoList from './src/todoList.js';
import { ToDo } from './src/ToDo.js';

function getDescription(storage) {
  const value = storage.getItem('list').description;
  return value;
}

describe('Add Item', () => {
  it('Add item to the DOM', () => {
    document.body.innerHTML = '<div> <ul id="to-do"> </div>';
    todoList.addTask(new ToDo('Finish the project', 0));
    const list = document.querySelectorAll('#to-do li');
    expect(list).toHaveLength(1);
  });

  it('Add item to the local Storage', () => {
    todoList.saveToDo(new ToDo('Finish the project', 0));
    const mockCallback = jest.fn();
    mockCallback.mockReturnValue({ description: 'Finish the project' });
    expect(getDescription({ getItem: mockCallback })).toBe('Finish the project');
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
