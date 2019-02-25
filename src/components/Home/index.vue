<template>
    <div class="container-fluid main-box">
        <div class="row">
            <div class="col-sm-7 col-sm-offset-3 main-content">
                <p style="font-size: 2em;padding-top:2em;text-align: center;">文章列表</p>
                <Articles :article-list="articleList"></Articles>
                <Loadmore v-if="articleList.length > 0 && isMore" :options="options" :is-more="isMore" :is-fetching="isFetching"></Loadmore>
            </div>
        </div>
    </div>
</template>

<script>
    import Articles from './articles.vue'
    import Loadmore from './loadmore.vue'
    import {
        mapState,
        mapActions
    } from 'vuex'
    export default {
        components: {
            Articles,
            Loadmore
        },
        computed: {
            ...mapState({
                options: ({
                    options
                }) => options.item,
                articleList: ({
                    articleList
                }) => articleList.items,
                isMore: ({
                    articleList
                }) => articleList.isMore,
                isFetching: ({
                    articleList
                }) => articleList.isFetching
            })
        },
        created() {
            console.log(this.articleList)
            console.log(this.options)
            if (this.articleList.length < 1) {
                this.getArticleList({
                    options: this.options
                })
            }
        },
        methods: {
            ...mapActions([
                'changeOptions',
                'getArticleList'
            ]),
            handleChange(options, isAdd = false) {
                this.changeOptions(options)
                this.getArticleList({
                    options: this.options,
                    isAdd: isAdd
                })
            }
        }
    }
</script>

