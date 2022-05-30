<script lang="ts">
import CustomButton from './components/Control/Button.vue';
import CustomInput from './components/Control/TextInput.vue';
import { defineComponent, ref } from 'vue';
import { useTodos } from '../src/components/Function/useTodos';

export default defineComponent({
  components: { CustomButton, CustomInput },
  setup() {
    const { todos, setData, addTodo, setTarget, removeTodo } = useTodos();
    const todolist = ref(1);

    return { todolist };
  },
});
</script>

<template>
  <custom-button ButtonText="Menu"></custom-button>
  <custom-input></custom-input>
</template>

<style></style>
