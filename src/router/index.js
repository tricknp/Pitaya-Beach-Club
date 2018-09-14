import Vue from 'vue'
import Router from 'vue-router'

import Home         from '@/components/GeneralViews/Home'
import ApartHotel   from '@/components/GeneralViews/ApartHotel'
import Club         from '@/components/GeneralViews/Club'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/apart-hotel',
      name: 'ApartHotel',
      component: ApartHotel
    },

    {
      path: '/club',
      name: 'Club',
      component: Club
    }

  ]
})
