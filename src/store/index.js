import Vue from 'vue'
import Vuex from 'vuex'
import postApi from 'post'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            posts: []
        },
        actions: {
            getAllPosts({ commit, state}, page) {
                return postApi.getAllPosts
            }
        },
        mutations: {

        },
        getters: {

        }
    })
}
