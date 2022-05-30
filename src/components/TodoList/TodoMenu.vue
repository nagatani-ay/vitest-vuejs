<script lang="ts">
import CustomButton from '../Control/Button.vue';
import CustomInput from '../Control/TextInput.vue';
import CalendarInput from '../Control/CalendarInput.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: { CustomButton, CustomInput, CalendarInput },
  setup() {
    const tempText = ref('');
    return {};
  },
});
</script>

<template>
  <div>
    <custom-button ButtonText="Add"></custom-button>
    <custom-input></custom-input>
    <calendar-input></calendar-input>
  </div>
</template>

<style></style>
