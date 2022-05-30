<script lang="ts">
import TodoMenu from './components/TodoList/TodoMenu.vue';
import TodoItem from './components/TodoList/TodoItem.vue';

import { defineComponent, ref, computed } from 'vue';
import { useTodos } from '../src/components/Function/useTodos';
import { Todo } from './type';

export default defineComponent({
  components: { TodoMenu },
  setup() {
    const todolist = getTodos();

    return { todolist };
  },
});
</script>

<template>
  <todo-menu></todo-menu>
  <todo-item></todo-item>
</template>

<style></style>
