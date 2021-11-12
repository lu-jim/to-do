/**
 * @jest-environment jsdom
 */
import todoList from './todoList.js';

jest.mock('./todoList');
describe('Add Item', () => {
  it('Add item to the DOM', () => {
    document.body.innerHTML = '<div> <ul id="to-do"> </div>';
    todoList.addTask('Finish the project');
    const list = document.querySelectorAll('#to-do li');
    expect(list).toHaveLength(1);
  });

  it('Add item to the Local Storage', () => {
    const list = todoList.saveToDo('Finish the project', []);
    expect(list).toStrictEqual([
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
    const todo = [
      {
        description: 'Finish the project',
        completed: false,
        index: 0,
      },
      {
        description: 'Address PR feedback',
        completed: true,
        index: 1,
      },
      {
        description: 'Submit',
        completed: false,
        index: 2,
      },
    ];
    document.body.innerHTML = '<div> <ul id="to-do"> </div>';
    todoList.removeToDo(1, todo);
    const domList = document.querySelectorAll('#to-do li');
    expect(domList).toHaveLength(2);
  });
  it('Delete item from Local Storage', () => {
    const todo = [
      {
        description: 'Finish the project',
        completed: false,
        index: 0,
      },
      {
        description: 'Address PR feedback',
        completed: true,
        index: 1,
      },
      {
        description: 'Submit',
        completed: false,
        index: 2,
      },
    ];
    expect(todoList.deleteToDo(1, todo)).toHaveLength(2);
  });
});

describe('Modify to-do list', () => {
  it('Edit task description', () => {
    const todo = [
      {
        description: 'Address PR feedback',
        completed: false,
        index: 0,
      },
    ];
    document.body.innerHTML = '<li class="list-item"> <form class="description-form" id="form-0"><input type="text" class="list-description" id="description-0" value="Finish the project"></form></li>';
    expect(todoList.updateList(0, todo)[0].description).toBe('Finish the project');
  });

  it('Update item completion', () => {
    const todo = [
      {
        description: 'Address PR feedback',
        completed: false,
        index: 0,
      },
    ];
    document.body.innerHTML = '<input type="checkbox" id="task-0" class="task-check" checked="checked"></li>';
    expect(todoList.changeList(document.body.firstChild, todo)[0].completed).toBeTruthy();
  });

  it('Clear all completed', () => {
    const todo = [
      {
        description: 'Finish the project',
        completed: false,
        index: 0,
      },
      {
        description: 'Address PR feedback',
        completed: true,
        index: 1,
      },
      {
        description: 'Submit',
        completed: true,
        index: 2,
      },
    ];
    expect(todoList.clearCompleted(todo)).toHaveLength(1);
  });
});
