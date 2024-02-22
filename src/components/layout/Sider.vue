<template>
  <aside class="ant-layout-sider" :style="{ width }">
    <slot />
  </aside>
</template>

<script setup lang="ts">
import 'ant-design-vue/dist/antd.css'
import { defineOptions } from 'vue'
interface SiderProps {
  width?: string
}
defineOptions({
  name: 'Sider'
})
withDefaults(defineProps<SiderProps>(), {
  width: '200px'
})
</script>
