<script lang="ts">
import TodoMenu from './components/TodoList/TodoMenu.vue';
import TodoItem from './components/TodoList/TodoItem.vue';

import { defineComponent, ref, computed, watch } from 'vue';
import { useTodos } from '../src/components/Function/useTodos';
import { Todo } from './type';

export default defineComponent({
  components: { TodoMenu },
  setup() {
    const { getTodos, addTodo } = useTodos();
    console.log(getTodos());
    const todolist = ref<Todo[]>([
      {
        code: 'string',
        text: 'test1',
        status: false,
        time: 'string',
        deadline: { year: 2022, month: 5, day: 1 },
      },
    ]);

    function onCreate(data) {
      addTodo(data);
      todolist.value = getTodos();
    }

    return { todolist, onCreate };
  },
});
</script>

<template>
  <todo-menu @onCreate="onCreate()"></todo-menu>
  <todo-item></todo-item>
</template>

<style></style>
