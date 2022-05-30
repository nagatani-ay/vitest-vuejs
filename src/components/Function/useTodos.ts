import { ref } from 'vue';
import { Todo } from '../../type';

export function useTodos() {
  const todos = ref<Todo[]>([]);

  function addTodo(data: Todo) {
    todos.value.push(data);
  }

  function removeTodo(code: string) {
    const codes = todos.value.map((x: Todo) => x.code);
    const target = codes.indexOf(code);
    todos.value.splice(target, 1);
  }

  return {
    todos,
    addTodo,
    removeTodo,
  };
}
