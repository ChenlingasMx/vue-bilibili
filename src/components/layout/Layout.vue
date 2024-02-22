<template>
  <section class="ant-layout" :class="classes">
    <slot />
  </section>
</template>

<script setup lang="ts">
import { useSlots, type VNode, type Component } from 'vue'
import 'ant-design-vue/dist/antd.css'

function useClasses() {
  const slots = useSlots()
  let hasSider = false
  if (slots && slots.default) {
    const vnodes: VNode[] = slots.default()
    hasSider = vnodes.some((vnode: VNode) => {
      const component = vnode.type as Component
      return component.name === 'Sider'
    })
  }
  return hasSider ? 'ant-layout-has-sider' : ''
}

const classes = useClasses()

</script>
