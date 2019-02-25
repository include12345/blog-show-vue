import {getApps} from '@/api'

const state = {
    items:[]
}
const actions = {
    getApps ({commit}) {
        getApps().then(response => {
            if(!response.ok) {
                return commit('FAILURE_GET_APPS')
            }
            commit('SUCCESS_GET_APPS', {apps: response.data.data})
        }, response => {
            commit('FAILURE_GET_APPS')
        })
    }
}

const mutations = {
    ['FAILURE_GET_APPS'](state){
        state.items = []
    },
    ['SUCCESS_GET_APPS'](state, payload){
        state.items = payload.apps
    }
}

export default {
    state,
    actions,
    mutations
}