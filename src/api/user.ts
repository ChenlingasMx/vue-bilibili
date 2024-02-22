import { axios } from '../utils/axios'

export async function userHi() {
  return axios.get('/user/hi')
}
