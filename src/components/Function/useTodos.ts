import { ref } from 'vue';

export function useTodos() {
  const todos: any = ref([]);
  const setData: any = ref();
  const setTarget: any = ref();

  function addTodo() {
    todos.value.push(setData.value);
  }

  function removeTodo() {
    const codes = todos.value.map((x: any) => x.code);
    const target = codes.indexOf(setTarget.value);
    todos.value.splice(target, 1);
  }

  return {
    todos,
    setData,
    setTarget,
    addTodo,
    removeTodo,
  };
}
