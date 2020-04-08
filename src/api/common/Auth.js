import store from '@/store'
import axios from 'axios'

export default {
    isLoggedIn() {
        return store.getters.isLoggedIn
    },
    login() {
        return axios.get('/static/userdata.json')
    },
    saveUser(user) {
        return store.dispatch('SAVE_USER', user)
    }
}