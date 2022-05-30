<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: ['todos'],
  expose: ['todos'],
  setup() {
    return {};
  },
});
</script>

<template></template>

<style scoped></style>
