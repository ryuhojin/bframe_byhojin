import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default{
    state:{
        settings: {
            isShowTagsView: true
        },
        visitedViews: []
    },
    mutations:{
        ADD_VISITED_VIEW: (state, view) => {
            if (!state.settings.isShowTagsView) {
                return
            }
            if (state.visitedViews.some(v => v.path === view.path)) return
            state.visitedViews.push(
                Object.assign({}, view, {
                    title: view.meta.title || 'NO-NAME'
                })
            )
        },
        DEL_VISITED_VIEW: (state, view) => {
            for (const [i, v] of state.visitedViews.entries()) {
                if (v.path === view.path) {
                    state.visitedViews.splice(i, 1)
                    break
                }
            }
        }
    },
    actions:{
        ADD_VISITED_VIEW: (state, view) => {
            state.commit('ADD_VISITED_VIEW', view)
        },
        DEL_VISITED_VIEW: (state, view) => {
            return new Promise(resolve => {
                state.commit('DEL_VISITED_VIEW', view)
                resolve({
                    visitedViews: state.state.visitedViews
                })
            })
        }
    },
    getters:{
        showTagsView: state => {
            return state.settings.isShowTagsView
        },
        getCachedViewNames: state => {
            let cachedViewNames = [], i, view
            for (i in state.visitedViews) {
                view = state.visitedViews[i]
               if (!view.meta.noCache) {
                    cachedViewNames.push(view.name)
                } 
            }
            return cachedViewNames
        },
    }
}