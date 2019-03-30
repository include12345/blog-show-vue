
const state = {
   item: {
     currentPage: 1,
     itemsPrePage: 2,
     sortName: 'publish_time',
     tagId: ''
   }
}

const actions = {
    changeOptions({commit}, options) {
        commit('CHANGE_OPTIONS', {options: options})
    }
}

const mutations = {
    ['CHANGE_OPTIONS'](state,action) {
        state.item = {...state.item, ...action.options}
    }
}

export default {
    state,
    actions,
    mutations
}

