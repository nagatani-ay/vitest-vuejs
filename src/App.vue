<script lang="ts">
import CustomButton from './components/Control/Button.vue';
import CustomInput from './components/Control/TextInput.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { CustomButton, CustomInput },
  setup() {
    const todos = ref(1);

    return { todos };
  },
});
</script>

<template>
  <custom-button ButtonText="Menu" :todos="todos"></custom-button>
  <custom-input></custom-input>
</template>

<style></style>
