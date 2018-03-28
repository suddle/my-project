import Vue from 'vue'
import App from './index'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '最后一页'
  }
}
