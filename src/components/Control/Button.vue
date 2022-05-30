<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: ['ButtonText'],
  expose: ['ButtonText'],
  setup() {
    return {};
  },
});
</script>

<template>
  <button>
    <slot>{{ ButtonText }}</slot>
  </button>
</template>

<style scoped></style>
