import {getPrenext} from '../../api'

const state = {
    next:{},
    prev:{}
}

const actions = {
    getPrenext({commit}, id) {
        return getPrenext(id).then(response => {
            //if(response.ok) {
                commit('PRENEXT_ARTICLE', {prenextArticle: response})
            //}
        })
    }
}

const mutations = {
    ['PRENEXT_ARTICLE'](state, action) {
        state.prev = {id: action.prenextArticle.preId, title: action.prenextArticle.preTitle}|| {}
        state.next = {id: action.prenextArticle.nextId, title: action.prenextArticle.nextTitle} || {}
        console.log(state.prev)
    }
}

export default {
    state,
    actions,
    mutations
}
