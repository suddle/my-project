import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import one from '@/components/index/one'
import two from '@/components/pro/two'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/one',
      component: one
    },
    {
      path: '/two',
      component: two
    }
  ]
})