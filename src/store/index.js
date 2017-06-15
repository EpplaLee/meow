import Vue from 'vue'
import Vuex from 'vuex'
// import postApi from 'post'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    curPage: 1,
    section: 'post'
  },
  actions: {
  },
  mutations: {
    changeSection (state, name) {
      state.section = name
    }
  },
  getters: {
    posts: state => state.posts,
    curPage: state => state.curPage,
    section: state => state.section
  }
})

