import Vue from 'vue'
import Router from 'vue-router'

import Login        from '@/components/Authentication/Login'
import Admin        from '@/components/GeneralViews/Admin'

import Home         from '@/components/GeneralViews/Home'
import ApartHotel   from '@/components/GeneralViews/ApartHotel'
import Club         from '@/components/GeneralViews/Club'
import Gastronomy   from '@/components/GeneralViews/Gastronomy'
import Shopping     from '@/components/GeneralViews/Shopping'
import Garopaba     from '@/components/GeneralViews/Garopaba'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/hospedagem',
      name: 'ApartHotel',
      component: ApartHotel
    },

    {
      path: '/club',
      name: 'Club',
      component: Club
    },

    {
      path: '/gastronomia',
      name: 'Gastronomy',
      component: Gastronomy
    },

    {
      path: '/garopaba',
      name: 'Garopaba',
      component: Garopaba
    },

    {
      path: 'shopping',
      name: 'Shopping',
      component: Shopping
    }

  ]
})

export default router
