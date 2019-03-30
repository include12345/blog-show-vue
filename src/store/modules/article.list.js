import {getArticleList} from '../../api'

const state = {
    isFetching: false,
    isMore: true,
    items: []
}

const actions = {
    getArticleList({commit}, {options, isAdd=false}) {
        commit('REQUEST_ARTICLE_LIST')
        getArticleList(options).then(response => {
            const json = response.articleList
            var isMore = false
            if (response.articleCount > (options.itemsPrePage * options.currentPage)) {
                 isMore = true
            } 
            isAdd 
            ? commit('ADD_ARTICLE_LIST', {
                articleList: json,
                isMore: isMore
            })
            : commit('ARTICLE_LIST', {
                
                articleList: json,
                isMore: isMore
            })
        }, response => {
            console.log("response:"+response)
            commit('GET_ARTICLE_LIST_FAILURE')
        })
    }
}

const mutations = {
    ['REQUEST_ARTICLE_LIST'](state) {
        state.isFetching = true
    },
    ['ARTICLE_LIST'](state, action) {
        state.isFetching = false
        state.isMore = action.isMore
        state.items = action.articleList
    },
    ['GET_ARTICLE_LIST_FAILURE'](state) {
        state.isFetching = false
    },
    ['ADD_ARTICLE_LIST'](state, action) {
        state.isFetching = false
        state.isMore = action.isMore
        state.items = [...state.items, ...action.articleList]
    }
}

export default {
    state,
    actions,
    mutations
}
