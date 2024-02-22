<template>
  <main class="ant-layout-content">
    <slot />
  </main>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'

import 'ant-design-vue/dist/antd.css'

defineOptions({
  name: 'Content'
})

</script>
