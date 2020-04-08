import axios from 'axios'
import store from '@/store'

export default{
    findAll: () => {
        return axios.get('/static/com_cmm_code.json')
    },
    setCodes:(codes)=>{
        return store.dispatch('SAVE_COMMONCODE',codes)
    },
    insert(code){
        return store.dispatch('INSERT_CODE', code)
    },
    select(code){
        return store.dispatch('SELECT_CODE',code)
    },
    delete(id){
        return store.dispatch('DELETE_CODE',id)
    },
    update(code){
        return store.dispatch('UPDATE_CODE',code)
    }
}