import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state : {
    category : null,
    checked : [],
    ord : null
  },
  getters : {
    getCategory : function (state){
      return state.category;
    },
    getChecked : function (state){
      return state.checked;
    },
    getOrd : function(state){
      return state.ord;
    }
  },
  mutations : {
    setCategory : function(state, payload){
      state.category = payload;
    },
    setChecked : function (state, payload){
      state.checked = payload;
    },
    setOrd : function(state, payload){
      state.ord = payload;
    },
    pushChecked : function(state, payload){
      state.checked.push(payload)
    }
  },
  actions : {

  }
})
