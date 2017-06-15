import Vue from 'vue'
import Vuex from 'vuex'
import postApi from 'post'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            posts: [],
            curPage: 1,
            section: 'post'
        },
        actions: {
            getAllPosts({ commit, state}, page, section, user) {
                return postApi.getAllPosts(page, section, user).then(res => {
                    commit('GET_ALL_POSTS', { posts: res.data.postArr, curPage: page})
                    return new Promise((resolve, reject) => {
                        resolve(res)
                    })
                })
            }
        },
        mutations: {

        },
        getters: {
            posts: state => state.posts,
            curPage: state=> state.curPage,
            section: state => state.section
        }
    })
}
