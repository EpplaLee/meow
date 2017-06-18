import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    curPage: 1,
    section: 'post',
    user: '',
    logState: false
  },
  actions: {
    getAllPosts ({commit, state}) {
      api.getAllPosts(state.section).then(res => {
        commit('GET_ALL_POSTS', res.data.posts)
      })
    },
    login ({commit, state}, { username, password }) {
      api.login(username, password).then(function (res) {
        if (res.data.loginSuccess === true) {
          commit('LOG_IN', username)
          alert('登陆成功')
          router.push('/')
        } else {
          alert('账号不存在或密码错误')
        }
      })
    }
  },
  mutations: {
    GET_ALL_POSTS (state, post) {
      state.posts = post
    },
    CHANGE_SECTION (state, name) {
      state.section = name
    },
    LOG_IN (state, user) {
      state.user = user
      state.logState = true
    },
    LOG_OUT (state) {
      state.logState = false
      state.user = ''
    }
  },
  getters: {
    posts: state => state.posts,
    curPage: state => state.curPage,
    section: state => state.section
  }
})

