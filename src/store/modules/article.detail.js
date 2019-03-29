import {getOneArticle} from '../../api'

const state = {
    item:{}
}

const actions = {
    getArticleDetail ({commit}, id) {
        getOneArticle(id).then(response => {
            //if(response.ok) {
                const article = response
                commit('ARTICLE_DETAIL', {
                    articleDetail: {...article}
                })
            //}
        })
    }
}

const mutations = {
    ['ARTICLE_DETAIL'](state,action) {
        state.item = {...state.item, ...action.articleDetail}
    }
}

export default {
    state,
    actions,
    mutations
}
