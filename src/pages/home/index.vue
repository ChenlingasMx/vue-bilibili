<template>
  <div>
    <Layout>
      <a-row :gutter="16" style="margin-top: 20px">
        <a-col :span="12">
          <a-carousel autoplay>
            <div v-for="(item, i) in images" :key="i">
              <img class="car-imgs" :src="item" />
            </div>
          </a-carousel>
        </a-col>
        <a-col :span="12">
          <a-carousel autoplay>
            <div v-for="(item, i) in images" :key="i">
              <img class="car-imgs" :src="item" />
            </div>
          </a-carousel>
        </a-col>
      </a-row>

      <a-row :gutter="16">
        <a-col :span="6" v-for="item in videos" :key="item.key" style="margin-top: 16px">
          <a-card hoverable>
            <template #cover>
              <img :src="item.image" />
            </template>
            <a-card-meta :title="item.name" :description="item.text"></a-card-meta>
          </a-card>
        </a-col>
      </a-row>
      <a-spin :spinning="loading" v-show="loading" style="display: flex; justify-content: center" />
    </Layout>
  </div>
</template>

<script setup lang="ts">
import Layout from '../layouts/default.vue'
import png0 from '@/assets/0.png'
import png1 from '@/assets/1.png'
import { ref, onMounted, onUnmounted } from 'vue'
import { getIndexList, type Video } from '@/api/mock'
const images = ref([png0, png1])
let current = 0
let videos = ref<Video[]>([])
let loading = ref(false)
onMounted(async () => {
  const res: Video[] = await getIndexList(current)
  videos.value = res
})

onMounted(() => {
  window.addEventListener('scroll', scroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scroll)
})

// clientHeight + scrollTop >= scrollHeight
const scroll = async () => {
  const scrollHeight = document.documentElement.scrollHeight
  const scrollTop = document.documentElement.scrollTop
  const clientHeight = document.documentElement.clientHeight
  if (clientHeight + scrollTop >= scrollHeight - 20) {
    current++
    loading.value = true
    const res: Video[] = await getIndexList(current)
    loading.value = false
    videos.value = [...videos.value, ...res]
  }
}
</script>
<style lang="scss">
.car-imgs {
  height: 400px;
  width: 100%;
}
.ant-card-meta-description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
