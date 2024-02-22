import Axios, { type InternalAxiosRequestConfig } from 'axios'
import { message } from 'ant-design-vue'

export const axios = Axios.create({
  baseURL: '/api'
})

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.apiKey = import.meta.env.VITE_API_KEY

  // 用户登陆信息，本地存储的获取

  return config
})

axios.interceptors.response.use((response) => {
  // 返回数据
  const { data } = response
  if (data.code === 0) {
    return data.data
  } else {
    // 不同的code有不同的含义
    message.warning(data.message)
    return Promise.reject(data)
  }
})
