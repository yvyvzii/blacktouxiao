import layoutaside from './home/layout'
import layoutheader from './home/layout-header'

export default {
  install: function (Vue) {
    Vue.component('layout', layoutaside)// 注冊一個全局組件
    Vue.component('layout-header', layoutheader)// 注冊一個全局組件
  }

}
