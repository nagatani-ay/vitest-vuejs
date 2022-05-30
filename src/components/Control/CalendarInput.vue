<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: [],
  emits: ['update:modelValue'],
  expose: ['modelValue'],
  setup() {
    const date = ref<string>('');
    return { date };
  },
});
</script>

<template>
  <input
    type="date"
    :value="date"
    @change="$emit('update:modelValue', $event.target.value)"
  />
  {{ date }}
</template>

<style scoped></style>
