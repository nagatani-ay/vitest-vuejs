import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
import { test, expect } from 'vitest';
import { useTodos } from '../src/components/Function/useTodos';

it('add todos', () => {
  const { todos, setData, addTodo, setTarget, removeTodo } = useTodos();
  setData.value = {
    code: 'id',
    text: 'test1',
    status: false,
    time: 'time',
    deadline: 'deadline',
  };
  addTodo();
  expect(todos.value).toEqual([
    {
      code: 'id',
      text: 'test1',
      status: false,
      time: 'time',
      deadline: 'deadline',
    },
  ]);
  setData.value = {
    code: 'id2',
    text: 'test2',
    status: false,
    time: 'time',
    deadline: 'deadline',
  };
  addTodo();
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
  setTarget.value = 'id';
  removeTodo();

  expect(todos.value).toEqual([
    {
      code: 'id2',
      text: 'test2',
      status: false,
      time: 'time',
      deadline: 'deadline',
    },
  ]);
});
