import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index'
import Article from '@/components/Article/index'
import NotFound from '@/components/NotFound'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:aid',
      name: 'article',
      component: Article,
      meta: {
        goTop: true
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

// Router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.goTop)) {
//     window.scroll(0, 0)
//   }
//   next()
// })
