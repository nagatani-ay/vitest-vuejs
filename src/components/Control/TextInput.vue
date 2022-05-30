<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: ['modelValue'],
  emits: ['update:modelValue'],
  expose: ['modelValue'],
  setup() {
    return {};
  },
});
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  {{ modelValue }}
</template>

<style scoped></style>
