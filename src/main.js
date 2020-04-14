// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import store from '@/store'
import 'babel-polyfill'; 
import i18n from './locales'


Vue.config.productionTip = false
Vue.use(VueLodash, {lodash: lodash })
/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
