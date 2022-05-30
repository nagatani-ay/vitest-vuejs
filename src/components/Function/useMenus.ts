import { Todo } from '../../type';

export function useMenus() {
  function newTodo(newText: string, newDeadline: string) {
    const todo: Todo = {
      code: generateID(),
      text: newText,
      status: false,
      time: getTime(),
      deadline: newDeadline,
    };
    return {};
  }

  return {
    newTodo,
  };
}

function generateID() {
  const code = Math.random().toString(32).substring(2);
  return code;
}

function getTime() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  return `${year}/${month}/${day}/${hour}:${minute}:${second}`;
}
