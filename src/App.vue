<script lang="ts">
import TodoMenu from './components/TodoList/TodoMenu.vue';

import { defineComponent, ref } from 'vue';
import { useTodos } from '../src/components/Function/useTodos';
import { Todo } from './type';

export default defineComponent({
  components: { TodoMenu },
  setup() {
    const todolist = ref<Todo[]>([]);

    return { todolist };
  },
});
</script>

<template>
  <todo-menu></todo-menu>
</template>

<style></style>
