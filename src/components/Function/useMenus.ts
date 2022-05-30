import { Todo } from '../../type';

export function useMenus() {
  function newTodo(newText: string, newDeadline: string) {
    const todo: Todo = {
      code: generateID(),
      text: newText,
      status: false,
      time: getTime(),
      deadline: splitDeadLine(newDeadline),
    };
    return {};
  }

  return {
    newTodo,
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
