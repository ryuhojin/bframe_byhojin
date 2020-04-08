import axios from 'axios'
import store from '@/store'
export default{
    findAll() {
        return axios.get('/static/userdata.json')
    },
    setUser(user){
        return store.dispatch('SAVE_USERDATA', user)
    },
    insert(user){
        return store.dispatch('INSERT_USERDATA', user)
    },
    select(user){
        return store.dispatch('SELECT_USERDATA',user)
    },
    delete(id){
        return store.dispatch('DELETE_USERDATA',id)
    },
    update(user){
        return store.dispatch('UPDATE_USERDATA',user)
    }
}