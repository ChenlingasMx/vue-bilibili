<template>
  <main class="ant-layout-header" :style="{ height }">
    <slot />
  </main>
</template>

<script setup lang="ts">
import 'ant-design-vue/dist/antd.css'
import { defineOptions } from 'vue'

interface HeaderProps {
  height?: string
}

defineOptions({
  name: 'Header'
})

withDefaults(defineProps<HeaderProps>(), {
  height: '60px'
})
</script>
