import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/api/common/Auth'


Vue.use(VueRouter);
const routes = [
  { path: '/index.html', redirect: '/login' },
  { path: '/', redirect: '/login' },
  {
    path: '/login', name: 'SignIn', component: () => import(/* webpackChunkName: "views" */'@/views/SignIn'), meta: { title: '로그인', noCache: true },
    beforeEnter(to, from, next) {
      if (Auth.isLoggedIn()) {
        next('user')
      }
      else {
        next()
      }
    }
  },
  { path: '/main', name: 'Main', component: () => import(/* webpackChunkName: "views" */'@/views/Main'), beforeEnter, meta: { title: '메인', attached: true } },
  { path: '/user', name: 'User', component: () => import(/* webpackChunkName: "views" */'@/views/User'), beforeEnter, meta: { title: '사용자관리' } },
  { path: '/code', name: 'Code', component: () => import(/* webpackChunkName: "views" */'@/views/Code'), beforeEnter, meta: { title: '코드관리' } },
  { path: '/upload', name: 'Upload', component: () => import(/* webpackChunkName: "views" */'@/views/Upload'), beforeEnter, meta: { title: '파일업로드' } }
]

function beforeEnter(to, from, next) {
  if (!Auth.isLoggedIn()) {
    next({ name: 'SignIn' })
  } else {
    next()
  }
}
export default new VueRouter({
  mode: 'history',
  routes,
})
