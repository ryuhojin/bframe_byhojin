import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default{
    state:{
        title:"",
        content:[]
    },
    mutations:{
        ADD_ERR:(state,view)=>{
            state.content.push(view.content)
        },
        INIT_ERR:(state)=>{
            state.content=[];
        }
    },
    actions:{
        ADD_ERR:(state,view)=>{
            state.commit('ADD_ERR',view)
        },
        INIT_ERR:(state)=>{
            state.commit('INIT_ERR')
        }
    },
    getters:{
        getErrors:state=>{
            return state
        }
    }
}