<template>
  <div class="bili-header">
    <div class="bili-header__bar">
      <!-- 左侧  -->
      <ul class="left-entry">
        <li v-for="(link, i) in links" :key="i">
          <a :href="link.url" class="entry-title">{{ link.name }}</a>
        </li>
      </ul>
      <!-- 右侧 -->
      <ul class="right-entry">
        <li v-for="(right, i) in rights" :key="i" class="right-entry-item">
          <a :href="right.url">{{ right.name }}</a>
        </li>
        <li class="upload-btn">
          <UploadOutlined />
          <span>投稿</span>
        </li>
      </ul>
    </div>
    <div class="bili-header__banner">
      <img class="banner" :src="banner" />
    </div>
    <div class="bili-header__logo">
      <a href="https://www.bilibili.com">
        <img class="logo-img" :src="logo" width="160" height="78" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import banner from '@/assets/header-back.png'
import logo from '@/assets/logo.png'
import { UploadOutlined } from '@ant-design/icons-vue'

const links = ref([
  { name: '首页', url: '' },
  { name: '番剧', url: '' },
  { name: '直播', url: '' },
  { name: '游戏中心', url: '' }
])

const rights = ref([
  { name: '创作中心', url: '' },
  { name: '稍后再看', url: '' },
  { name: '退出', url: '' }
])
</script>

<style lang="scss">
@import '@/styles/mixin.scss';
@include b(header) {
  min-height: 64px;
  position: relative;
  width: 100%;
  background: #fff;
  @include sub(bar) {
    position: absolute;
    top: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 64px;
    width: 100%;
    & .left-entry {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      list-style-type: none;
      li {
        margin-right: 10px;
      }
    }
    & .right-entry {
      display: flex;
      align-items: center;
      list-style-type: none;
      .right-entry-item {
        display: block;
        margin-right: 5px;
        text-align: center;
        cursor: pointer;
      }
      .upload-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 16px;
        width: 90px;
        height: 34px;
        border-radius: 8px;
        background: #fb7299;
        color: #fff;
        text-align: center;
        font-size: 14px;
        line-height: 20px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
    }
  }
  @include sub(banner) {
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: center;
    height: 155px;
    .banner {
      width: 100vw;
    }
  }
  @include sub(logo) {
    position: absolute;
    bottom: -10px;
    left: 60px;
  }
  a {
    color: #fff;
  }
}
// .bili-header {
//   .bibi-header_bar {
//   }
//   .bili-header_banner {
//   }
// }
</style>
