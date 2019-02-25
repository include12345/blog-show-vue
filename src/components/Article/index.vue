<template>
    <div class="article-box">
        <Content :article-detail="articleDetail"></Content>
        <Prenext :prev-article="prevArticle" :next-article="nextArticle"></Prenext>
        <Scrolltop></Scrolltop>
    </div>
</template>

<script>
import Content from './content.vue'
import Prenext from './prenext.vue'
import Scrolltop from '../Scrolltop/index.vue'
import {mapState, mapActions} from 'vuex'

export default {
    components: {Content, Scrolltop, Prenext},
    computed: {
        ...mapState({
            articleDetail: ({articleDetail}) =>articleDetail.item,
            nextArticle: ({prenextArticle}) =>prenextArticle.next,
            prevArticle: ({prenextArticle}) =>prenextArticle.prev,
            options: ({options}) => options.item,
            aid: ({route}) =>route.params.aid
        })
    },
    created () {
        this.initData()
    },
    watch:{
        '$route':'initData'
    },
    methods: {
        ...mapActions([
            'getArticleDetail',
            'getPrenext'
        ]),
        initData(){
            const aid = this.$route.params.aid
            this.getPrenext(aid)
            this.getArticleDetail(aid)
        }
    }
}
</script>

