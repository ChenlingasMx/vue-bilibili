<template>
  <Layout>
    <Header :style="{ height: '155px', color: '#fff', padding: '0px' }">
      <PageHeader />
    </Header>
    <Layout>
      <Content :style="{ background: '#fff' }">
        <slot></slot>
      </Content>
    </Layout>
    <Footer :style="{ background: '#fff' }">Footer</Footer>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/layout/Layout.vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Content from '@/components/layout/Content.vue'
import PageHeader from '@/components/page-header/PageHeader.vue'
// import Sider from '@/components/layout/Sider.vue'
</script>
