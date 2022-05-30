<script lang="ts">
import TodoMenu from './components/TodoList/TodoMenu.vue';
import TodoItem from './components/TodoList/TodoItem.vue';

import { defineComponent, ref, computed, watch } from 'vue';
import { useTodos } from '../src/components/Function/useTodos';
import { Todo } from './type';

export default defineComponent({
  components: { TodoMenu },
  setup() {
    const todolist = ref<Todo[]>(['']);
    

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
