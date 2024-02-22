import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import { expect, test } from 'vitest'

test('mount button', async () => {
  const wrapper = mount(Button, {
    props: {
      type: 'primary'
    },
    slots: {
      default: 'hello world'
    }
  })

  expect(wrapper.text()).toContain('hello world')
  expect(wrapper.classes()).toContain('ant-btn')
  expect(wrapper.classes()).toContain('ant-btn-primary')
})
