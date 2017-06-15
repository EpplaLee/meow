import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = [{
  path: '/',
  meta: {
    title: ''
  },
  component: (resolve) => require(['../view/index.vue'], resolve)
}
// {
//   path: '/login',
//   meta: {
//     title: 'login'
//   },
//   component: (resolve) => require(['./views/login.vue'], resolve)
// },
// {
//   path: '/signup',
//   meta: {
//     title: 'signup'
//   },
//   component: (resolve) => require(['./views/signup.vue'], resolve)
// },
// {
//   path: '/userpage',
//   meta: {
//     title: 'userpage'
//   },
//   component: (resolve) => require(['./views/userpage'], resolve)
// },
// {
//   path: '/post',
//   meta: {
//     title: 'post'
//   },
//   component: (resolve) => require(['./views/post'], resolve)
// }
]
export default new Router({
  routes: routers
})
