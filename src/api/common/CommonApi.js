import axios from 'axios'
import store from '@/store'
export default {
    getMenus: () => {
        return axios.get('/static/menu.json')
    },
    movingItem(moving) {
        return store.dispatch('MOVE_ITEM', moving)
    }
}