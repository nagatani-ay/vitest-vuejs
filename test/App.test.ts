import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
import { test, expect } from 'vitest';
import { useTodos } from '../src/components/Function/useTodos';
import { splitDeadLine } from '../src/components/Function/useMenus';
it('useTodos', () => {
  const { todos, addTodo, removeTodo, editTodo } = useTodos();
  addTodo({
    code: 'id',
    text: 'test1',
    status: false,
    time: 'time',
    deadline: splitDeadLine('2022-05-22'),
  });
  expect(todos.value).toEqual([
    {
      code: 'id',
      text: 'test1',
      status: false,
      time: 'time',
      deadline: { year: 2022, month: 5, day: 22 },
    },
  ]);
  addTodo({
    code: 'id2',
    text: 'test2',
    status: false,
    time: 'time',
    deadline: splitDeadLine('2022-05-23'),
  });
  expect(todos.value).toEqual([
    {
      code: 'id',
      text: 'test1',
      status: false,
      time: 'time',
      deadline: { year: 2022, month: 5, day: 22 },
    },
    {
      code: 'id2',
      text: 'test2',
      status: false,
      time: 'time',
      deadline: { year: 2022, month: 5, day: 23 },
    },
  ]);
  removeTodo('id');
  expect(todos.value).toEqual([
    {
      code: 'id2',
      text: 'test2',
      status: false,
      time: 'time',
      deadline: { year: 2022, month: 5, day: 23 },
    },
  ]);
  editTodo(
    {
      code: 'id2',
      text: 'test3',
      status: false,
      time: 'time',
      deadline: splitDeadLine('2022-05-24'),
    },
    'id2'
  );

  expect(todos.value).toEqual([
    {
      code: 'id2',
      text: 'test3',
      status: false,
      time: 'time',
      deadline: { year: 2022, month: 5, day: 24 },
    },
  ]);
});
