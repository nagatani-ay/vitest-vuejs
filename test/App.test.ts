import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
import { test, expect } from 'vitest';
import { useTodos } from '../src/components/Function/useTodos';
import { Todo } from '../src/type';
it('useTodos', () => {
  const { todos, addTodo, removeTodo, editTodo } = useTodos();
  addTodo({
    code: 'id',
    text: 'test1',
    status: false,
    time: 'time',
    deadline: 'deadline',
  });
  expect(todos.value).toEqual([
    {
      code: 'id',
      text: 'test1',
      status: false,
      time: 'time',
      deadline: 'deadline',
    },
  ]);
  addTodo({
    code: 'id2',
    text: 'test2',
    status: false,
    time: 'time',
    deadline: 'deadline',
  });
  expect(todos.value).toEqual([
    {
      code: 'id',
      text: 'test1',
      status: false,
      time: 'time',
      deadline: 'deadline',
    },
    {
      code: 'id2',
      text: 'test2',
      status: false,
      time: 'time',
      deadline: 'deadline',
    },
  ]);
  removeTodo('id');
  expect(todos.value).toEqual([
    {
      code: 'id2',
      text: 'test2',
      status: false,
      time: 'time',
      deadline: 'deadline',
    },
  ]);
  editTodo(
    {
      code: 'id2',
      text: 'test3',
      status: false,
      time: 'time',
      deadline: 'deadline',
    },
    'id2'
  );

  expect(todos.value).toEqual([
    {
      code: 'id2',
      text: 'test3',
      status: false,
      time: 'time',
      deadline: 'deadline',
    },
  ]);
});
