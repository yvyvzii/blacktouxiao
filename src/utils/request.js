// 封裝axios
import axios from 'axios'
import ruter from '../router'
import { Message } from 'element-ui'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token}`
  return config
},
function () {
})
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}// 注意這裏undifinde判斷
}, function (error) {
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '參數錯誤'
      break
    case 507:
      message = '數據庫異常'
      break
    case 401:
      window.localStorage.removeItem('user-token')
      ruter.push('/login')
      break
    case 403:
      message = '沒有權限'
      break
    default:
      break
  }
  Message({ type: 'warning', message })
})

export default axios// 導出axios
