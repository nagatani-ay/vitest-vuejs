import { ref } from 'vue';
import { Todo } from '../../type';

export function useTodos() {
  const todos = ref<Todo[]>([]);
  // 追加処理
  function getTodos() {
    console.log(todos.value);
    return todos;
  }
  function addTodo(data: Todo) {
    todos.value.push(data);
    console.log(todos);
  }

  function createTodo(newText: string, newDeadline: string) {
    const todo: Todo = {
      code: generateID(),
      text: newText,
      status: false,
      time: getTime(),
      deadline: splitDeadLine(newDeadline),
    };
    return todo;
  }

  // 削除処理
  function removeTodo(code: string) {
    const codes = todos.value.map((x: Todo) => x.code);
    const target = codes.indexOf(code);
    todos.value.splice(target, 1);
  }
  // 編集処理
  function editTodo(data: Todo, code: string) {
    const codes = todos.value.map((x: Todo) => x.code);
    const target = codes.indexOf(code);
    todos.value.splice(target, 1, data);
  }

  return {
    todos,
    addTodo,
    removeTodo,
    editTodo,
    createTodo,
    getTodos,
  };
}

export function splitDeadLine(deadline: string) {
  const [year, month, day] = deadline.split('-').map(Number);

  return { year, month, day };
}

export function generateID() {
  const code = Math.random().toString(32).substring(2);
  return code;
}

export function getTime() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  return `${year}/${month}/${day}/${hour}:${minute}:${second}`;
}
