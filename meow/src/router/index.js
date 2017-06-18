import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = [{
  path: '/',
  meta: {
    title: ''
  },
  component: (resolve) => require(['../view/index.vue'], resolve)
},
{
  path: '/login',
  meta: {
    title: 'login'
  },
  component: (resolve) => require(['../view/login.vue'], resolve)
},
{
  path: '/signup',
  meta: {
    title: 'signup'
  },
  component: (resolve) => require(['../view/signup.vue'], resolve)
},
// {
//   path: '/userpage',
//   meta: {
//     title: 'userpage'
//   },
//   component: (resolve) => require(['./views/userpage'], resolve)
// },
{
  path: '/push',
  meta: {
    title: 'push'
  },
  component: (resolve) => require(['../view/push.vue'], resolve)
},
{
  path: '/post/:id',
  meta: {
    title: 'post'
  },
  component: (resolve) => require(['../view/postPage.vue'], resolve)
}
]
export default new Router({
  routes: routers
})
