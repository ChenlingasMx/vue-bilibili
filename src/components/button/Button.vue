<template>
  <button :class="classes" :type="nativeType">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import "ant-design-vue/dist/antd.css";

interface ButtonProps {
  type: 'primary' | 'default' | 'dnger' | 'link' | 'waring'
  nativeType?: 'button' | 'submit' | 'reset'
  size?: 'lg' | 'sm'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  nativeType: 'button',
  size: 'lg'
})

const classes = computed(() => {
  return ['ant-btn', `ant-btn-${props.size}`, `ant-btn-${props.type}`]
})
</script>

