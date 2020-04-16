import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/api/common/Auth'
// import VueCookies from 'vue-cookies';

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
  { path: '/upload', name: 'Upload', component: () => import(/* webpackChunkName: "views" */'@/views/Upload'), beforeEnter, meta: { title: '파일업로드' } },
  // { path: '/*', name: 'Page404', component: () => import(/* webpackChunkName: "views" */'@/views/Page404'), meta: { title: 'Page404' } },
  { path: '/layouthalf', name: 'LayoutHalf', component: () => import(/* webpackChunkName: "views" */'@/views/LayoutHalf'), beforeEnter, meta: { title: '하프레이아웃' } },
  { path: '/draganddrop', name: 'DragandDrop', component: () => import(/* webpackChunkName: "views" */'@/views/DragandDrop'), beforeEnter, meta: { title: '드래그앤드롭' } },

]

// 로그인 유지
// router.beforeEach( async(to, from, next) => {
//   if(VueCookies.get('token')===null && VueCookies.get('refresh_token') !== null){
//     await refreshToken();//토큰재발급
//   }
//   if (to.matched.some(record => record.meta.unauthorized) || VueCookies.get('token')){
//     return next(); //다음페이지
//   }
//     return next('/login'); //로그인
// })

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
