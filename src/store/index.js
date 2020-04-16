import Vue from 'vue'
import Vuex from 'vuex'

//modules
import common from './modules/common'
import user from './modules/user'
import code from './modules/code'
import mdi from './modules/mdi'
Vue.use(Vuex)

export default new Vuex.Store({
    strict: true, // mutation 을 이용해서만 state 변경가능
    modules: {
        common,
        user,
        code,
        mdi,
        messagebox
    }
})
