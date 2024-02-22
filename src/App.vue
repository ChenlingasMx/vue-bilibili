<template>
  <Layout>
    <Header :style="{ height: '50px', color: '#fff' }">Header</Header>
    <Layout>
      <Sider :style="{ height: '50px', color: '#fff' }">Sider</Sider>
      <Content>Content</Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/layout/Layout.vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Content from '@/components/layout/Content.vue'
import Sider from '@/components/layout/Sider.vue'
</script>
