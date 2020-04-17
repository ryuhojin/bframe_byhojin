import store from '@/store'

export default {
    addMessage(params) {
        return store.dispatch('ADD_MESSAGE', params)
    },
    initMessage()
    {
        return store.dispatch('INIT_MESSAGE')
    }
}