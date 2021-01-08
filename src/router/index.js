import Vue from 'vue'
import VueRouter from 'vue-router'

import Content from '@/components/Content'
import Blog from '@/components/Blog/Blog'
import Canvas from '@/components/Canvas/Canvas'
import Echarts from '@/components/Echarts/Echarts'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/content/blog'
    },
    {
      path: '/content',
      name: 'Content',
      component: Content,
      children: [
        {
          path: 'blog',
          name: 'blog',
          component: Blog
        },
        {
          path: 'canvas',
          name: 'canvas',
          component: Canvas
        },
        {
          path: 'echarts',
          name: 'echarts',
          component: Echarts
        }
      ]
    }
  ]
})
