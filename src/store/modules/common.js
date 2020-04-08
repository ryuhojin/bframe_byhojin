import Vue from 'vue'
import Vuex from 'vuex'
import CommonApi from '@/api/common/CommonApi'

Vue.use(Vuex)

export default ({
    state: {
        isloading: false,
        menus: [],
        messages: [],
    },
    mutations: {
        SAVE_MENU: (state, payload) => {
            state.menus = payload
        },
    },
    actions: {
        GET_MENU: (state) => {
            return CommonApi.getMenus();
        },
    },
    getters: {
        
        menus: state => {
            return state.menus
        },
        
        getTitle: state => path => {
            let menu = null
            for (var i in state.menus) {
                menu = state.menus[i]
                if (path === menu.path) {
                    return menu.title
                }
            }

            return '메뉴관리에서 타이틀을 설정해주세요.'
        }
    }
})