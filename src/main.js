import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './Mock/mock.js'
import axios from 'axios'

// 配置请求的跟路径
axios.defaults.baseURL = 'http://mockjs.com/api' // 设置默认请求的url
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
