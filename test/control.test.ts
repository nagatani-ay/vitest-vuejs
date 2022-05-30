import { mount } from '@vue/test-utils';
import Button from '../src/components/Control/Button.vue';
import TextInput from '../src/components/Control/TextInput.vue';
import CalendarInput from '../src/components/Control/CalendarInput.vue';

import { test, expect } from 'vitest';

// Buttonのテスト
test('button', async () => {
  const wrapper = mount(Button, {
    props: {
      ButtonText: '',
    },
  });

  const button = wrapper.get('button');
  await wrapper.setProps({ ButtonText: 'a' });
  expect(button.text()).toBe('a');
  // await wrapper.get('button').trigger('click');
});

// textInputのテスト
test('textInput', async () => {
  const wrapper = mount(TextInput, {
    props: {
      modelValue: '',
    },
  });

  const input = wrapper.get('input');
  await wrapper.setProps({ modelValue: 'test' });
  expect(wrapper.vm.modelValue).toBe('test');

  wrapper.vm.$emit('update:modelValue');
  expect(wrapper.emitted()).toBeTruthy();
});

test('calendarInput', async () => {
  const wrapper = mount(CalendarInput, {
    props: {
      modelValue: '',
    },
  });

  wrapper.vm.$emit('update:modelValue');
  expect(wrapper.emitted()).toBeTruthy();
});
