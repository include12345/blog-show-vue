import Vue from 'vue'
import Vuex from 'vuex'
import apps from './modules/apps'
import articleList from './modules/article.list'
import prenextArticle from './modules/article.prenext'
import articleDetail from './modules/article.detail'
import options from './modules/options'
import * as getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
    getters,
    modules: {
        apps,
        articleList,
        prenextArticle,
        articleDetail,
        options
    }
})