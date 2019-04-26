import Vue from 'vue'
import Router from 'vue-router'
import Cindy from '@/components/cindy'
import List from '@/components/list'
import Page from '@/components/page'
import User from '@/components/user'
import Layout from '@/components/layout'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'cindy',
      component: Cindy,
      children: [{
        path: '/list',
        name: 'list',
        component: List
      },
      {
        path: '/user',
        name: 'user',
        component: User
      },
      {
        path: '/page',
        name: 'page',
        component: Page
      }]
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    }
  ]
})
