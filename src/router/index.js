import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ApiList from '@/components/apiList/apiList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/apiList',
      name: 'ApiList',
      component: ApiList
    },
  ]
})
