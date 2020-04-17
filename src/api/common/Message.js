import store from '@/store'

export default {
    addErr(params) {
        return store.dispatch('ADD_ERR', params)
    },
    initErr()
    {
        return store.dispatch('INIT_ERR')
    }
}