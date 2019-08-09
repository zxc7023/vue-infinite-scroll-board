import Vue from 'vue'
import Router from 'vue-router'
import MainView from '../views/MainView'
import ListDetail from '../views/ListDetail'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path : '/',
      name : 'MainView',
      component : MainView
    },
    {
      path : '/request/:req_no',
      name : 'ListDetail',
      component : ListDetail
    }
  ]
})
