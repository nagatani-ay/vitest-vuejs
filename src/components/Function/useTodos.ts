import { ref } from 'vue';
import { Todo } from '../../type';

export function useTodos() {
  const todos = ref<Todo[]>([]);
  // 追加処理
  function addTodo(data: Todo) {
    todos.value.push(data);
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
  };
}
