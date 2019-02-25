<template>
    <div class="article-container">
        <h1 class="title">{{articleDetail.title}}</h1>
        <div class="markdown-content" v-html="articleDetail.content"></div>
    </div>
</template>

<script>
export default {
    props:['articleDetail']
}
</script>
