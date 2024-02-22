<template>
  <main class="ant-layout-footer" :style="{ height }">
    <slot />
  </main>
</template>

<script setup lang="ts">
import 'ant-design-vue/dist/antd.css'
import { defineOptions } from 'vue'
interface FooterProps {
  height?: string
}

defineOptions({
  name: 'Footer'
})

withDefaults(defineProps<FooterProps>(), {
  height: '60px'
})
</script>

<style>
.ant-layout-footer {
  text-align: center;
}
</style>
