import Vue from 'vue'
import Router from 'vue-router'
import MainView from '../views/MainView'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path : '/',
      name : 'MainView',
      component : MainView
    }
  ]
})
