<template>
  <div>
    <Layout>
      <!-- <a-row :gutter="16" style="margin-top: 20px">
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
      </a-row> -->

      <a-row :gutter="16">
        <a-col :span="6" v-for="item in videos" :key="item.key" style="margin-top: 16px">
          <a-card hoverable>
            <template #actions>
              <PlayCircleOutlined @click="watchLater" />
            </template>
            <template #cover>
              <img :src="item.image" />
            </template>
            <a-card-meta :title="item.name" :description="item.text"></a-card-meta>
          </a-card>
        </a-col>
      </a-row>
      <a-spin :spinning="loading" v-show="loading" style="display: flex; justify-content: center" />

      <div class="animate-ball">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div class="animate" v-show="animate.show"></div>
        </transition>
      </div>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import Layout from '../layouts/default.vue'
import png0 from '@/assets/0.png'
import png1 from '@/assets/1.png'
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import { getIndexList, type Video } from '@/api/mock'
import { PlayCircleOutlined } from '@ant-design/icons-vue'
const images = ref([png0, png1])
let current = 0
let videos = ref<Video[]>([])
let loading = ref(false)
let animate: {
  show: boolean
  el: Element | null
} = reactive({
  show: false,
  el: null
})
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

const watchLater = (e: Event) => {
  // 我们需要一个小球来到鼠标的位置 自动动画移动到稍后再看的位置
  animate.show = true
  animate.el = e.target as HTMLElement
  e.preventDefault()
}

const beforeEnter = (el: Element) => {
  let dom = animate.el
  let rect: any = dom?.getBoundingClientRect()
  let x = window.innerWidth - rect?.left - 230
  let y = rect?.top - 10
  ;(el as HTMLElement).style.transform = `translate(-${x}px,${y}px)`
}

const enter = (el: Element, done: () => void) => {
  document.body.offsetHeight
  ;(el as HTMLElement).style.transform = `translate(0,0)`
  el.addEventListener('transitionend', done)
}

const afterEnter = (el: Element) => {
  ;(el as HTMLElement).style.display = `none`
  animate.show = false
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
.animate-ball .animate {
  position: fixed;
  top: 15px;
  right: 230px;
  z-index: 100;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fb7299;
  transition: all 1s linear;
}
</style>
