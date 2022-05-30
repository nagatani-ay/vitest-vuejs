<script lang="ts">
import CustomButton from '../Control/Button.vue';
import CustomInput from '../Control/TextInput.vue';
import CalendarInput from '../Control/CalendarInput.vue';
import { defineComponent, ref } from 'vue';
import { useTodos } from '../Function/useTodos';

export default defineComponent({
  components: { CustomButton, CustomInput, CalendarInput },
  setup(props, context) {
    const { createTodo, addTodo } = useTodos();
    const text = ref('');
    const deadline = ref('');

    const onCreate = () => {
      context.emit('onCreate', createTodo(text.value, deadline.value));
    };
    return { text, deadline, onCreate };
  },
});
</script>

<template>
  <div>
    <custom-button ButtonText="Add" @click="onCreate()"></custom-button>
    <custom-input v-model="text"></custom-input>
    <calendar-input v-model="deadline"></calendar-input>
    {{ text }}
    {{ deadline }}
  </div>
</template>

<style></style>
