<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: ['todolist'],
  expose: ['todolist'],
  setup() {
    return {};
  },
});
</script>

<template>
  <ul>
    <li v-for="todo in todolist">{{ todo.text }}</li>
  </ul>
</template>

<style scoped></style>
