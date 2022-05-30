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
    type="date"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped></style>
