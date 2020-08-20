import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
// Vue.use(Message)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.prototype.$message = Message
Vue.config.productionTip = false
// 根据前端的跨域方式做调整 /a/b: /api/a/b => /a/b
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

axios.interceptors.response.use((response) => {
  const res = response.data
  const path = location.pathname
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    if (path !== '/index') {
      window.location.href = '/login'
      return Promise.reject(res)
    }
  } else {
    Message.warning(res.msg)
    return Promise.reject(res)
  }
}, (error) => {
  const res = error.response
  Message.error(res.data.message)
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
