import store from '@/store'

export default{
    openMessageBox(message){
        return store.dispatch('OPEN_MESSAGEBOX',message)
    },
    closeMessageBox(){
        return store.dispatch('CLOSE_MESSAGEBOX')
    }
}