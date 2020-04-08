import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default{
    state:{
        user: null,
        userdata:[],
    },
    mutations:{
        LOGOUT: (state) => {
            state.user = null
            state.menus = null
            state.codes = null
            state.messages = null
            state.visitedViews = []
        },
        SAVE_USER: (state, payload) => {
            state.user = payload
        },
        SAVE_USERDATA: (state, payload) => {
            state.userdata = payload
        },
        INSERT_USERDATA:(state,payload)=>{
            state.userdata.push(payload.data)
        },
        SELECT_USERDATA:(state,payload)=>{
            // for(var i =0;i<state.userdata.length;i++)
            // {
            //     if(state.userdata[i].appUId.includes(payload.appUId)||state.userdata[i].groupName.includes(payload.groupName))
                
            // }
            // state.userdata=payload
            console.log(state)
            console.log("아하")
            console.log(payload);
            console.log("이히")
        },
        DELETE_USERDATA:(state,payload)=>{
            const idx = state.userdata.findIndex(function(item){
                return item.id ==payload
            })
            if (idx>-1) state.userdata.splice(idx,1)
        },
        UPDATE_USERDATA:(state,payload)=>{
            const idx = state.userdata.findIndex(function(item){
                return item.id == payload.id
            })
            state.userdata[idx] = payload
        },
    },
    actions:{
        LOGOUT: (state) => {
            state.commit('LOGOUT')
        },
        SAVE_USER: (state, payload) => {
            state.commit('SAVE_USER', payload)
        },
        SAVE_USERDATA:(state,payload)=>{
            state.commit('SAVE_USERDATA',payload)
        },
        INSERT_USERDATA:(state,payload)=>{
            state.commit('INSERT_USERDATA',payload)
        },
        SELECT_USERDATA:(state,payload)=>{
            state.commit('SELECT_USERDATA',payload)
        },
        DELETE_USERDATA:(state,payload)=>{
            state.commit('DELETE_USERDATA',payload)
        },
        UPDATE_USERDATA:(state,payload)=>{
            state.commit('UPDATE_USERDATA',payload)
        },
    },
    getters:{
        isLoggedIn: state => {
            if (state.user) {
                return true
            } else {
                return false
            }
        },
        user: state => {
            return state.user
        },
        userdata: state=>(num,page)=>{
            var n=page;
            var arr = state.userdata.slice();
            var len = arr.length;
            let cnt = Math.floor(len/n)+(Math.floor(len%n)>0?1:0)
            var temp=[];
            for(var i=0;i<cnt;i++)
            {
                temp.push(arr.splice(0,n));
            }
            return temp[num-1]
        },
        totalUserPage:state=>page=>{
            var count=[]
            var n = state.userdata.length/page
            for(var i=1;i<n+1;i++)
            {
                count.push(i);
            }

            return count
        },
        getUserNum:state=>{
            return state.userdata.length;
            
        },
    }
}