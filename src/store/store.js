import Vue from 'vue'
import Vuex from 'vuex'
import {_getPosts,_getCategory,_getAdvertisement} from '../api/board-api'

Vue.use(Vuex)


export default new Vuex.Store({
  state : {
    category : {},
    checked : [],
    ord : 'asc',
    posts : [],
    advertisements : [],
    page : 1,
    adPage : 1,
    isLoading : false
  },
  getters : {
    getCategory : function (state){
      return state.category
    },
    getChecked : function (state){
      return state.checked
    },
    getOrd : function(state){
      return state.ord
    },
    getPosts : function(state){
      return state.posts
    },
    getAdvertisements : function(state){
      return state.advertisements
    },
    getIsLoading : function(state){
      return state.isLoading
    }
  },
  mutations : {
    setCategory : function(state, payload){
      state.category = payload
    },
    setChecked : function (state, payload){
      state.checked = payload
    },
    setOrd : function(state, payload){
      state.ord = payload
    },
    setPosts : function(state, payload){
      state.posts = payload
    },
    setAdvertisements : function(state, payload){
      state.advertisements = payload
    },
    setIsLoading : function(state,payload){
      state.isLoading = payload
    },
    setPage : function(state,payload){
      state.page = payload
    },
    setAdpage : function(state,payload){
      state.adPage = payload
    },
    plusAdpage : function(state){
      state.adPage += 1
    }
  },
  actions : {
    async setCategory({commit}){
      const checked = []
      const res = await _getCategory()

      res.data.list.map(one => {
        checked.push(one.no)
      });
      commit('setCategory',res.data.list)
      commit('setChecked',checked)
    },
    async categoryChange({commit,dispatch},checked){
      commit('setChecked',checked)

      await dispatch('setPosts');
    },
    async ordChange({commit,dispatch},ord){
      commit('setOrd',ord)

      await dispatch('setPosts');
    },
    async setPosts({state,commit}){
      commit('setIsLoading',true)
      const res = await _getPosts(state.page, state.ord, state.checked)
      commit('setPosts', res.data.list)
      commit('setIsLoading',false)
    },
    async morePosts({state, commit}){

        commit('setPage',state.page+1);
        const res = await _getPosts(state.page, state.ord, state.checked)
        commit('setPosts', state.posts.concat(res.data.list))

    },
    async setAdvertisements({state,commit}){
      const res = await _getAdvertisement(state.adPage,1)
      commit('setAdvertisements',res.data.list)
    },
    async moreAdvertisements({state, commit}){
      commit('plusAdpage')
      let res = await _getAdvertisement(state.adPage, 1)
      if(res.status = 200 && res.data.list.length == 0){
          commit('setAdpage',1)
          res = await _getAdvertisement(state.adPage,1)
      }
      commit('setAdvertisements',state.advertisements.concat(res.data.list))
    },
    async moreList({state,commit,dispatch}){
      commit('setIsLoading',true)
      await dispatch('morePosts')
      await dispatch('moreAdvertisements')
      commit('setIsLoading',false)
    }
  }
})
