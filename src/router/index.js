import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddSmoothie from '@/components/AddSmoothie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
    }
  ]
})
