import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
import { test, expect } from 'vitest';
test('app', async () => {
  const wrapper = mount(App,{
    data(){
      return{
        todos:1
      }
    }
  })

  await wrapper.setData({todos:"a"})
  expect(wrapper.vm.todos).toBe("{text:'a'}")

});
