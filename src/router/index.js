import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main'
import CreateNewBlog from '@/components/BlogRelated/CreateNewBlog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/create-new-blog',
      name: 'CreateNewBlog',
      component: CreateNewBlog
    }
  ]
})
