import request from './resources'

export function getFrontArticleList(options) {
    return request({
        url: '/article/getFrontArticleList',
        method:'get',
        params: options,
    })
}

export function getArticleList(form) {
    console.log(form)
    return request({
      url: '/blog/listBlog',
      method: 'post',
      data: {
        "page":form.currentPage,
        "pageSize":form.itemsPrePage
      }
    })
  }

  export function getOneArticle(id) {
    return request({
      url: '/blog/getBlog',
      method: 'get',
      params: {id}
    })
  }

export function getFrontArticle(id) {
    return request({
        url: '/article/'+id+'/getFrontArticle',
        method:'get',
    })
}


export function getPrenext(id) {
    return request({
        url: '/blog/getPreNextBlog',
        method:'get',
        params: {id},
    })
}

export function getApps() {
    return request({
        url: '/getApps',
        method:'get',
        params: {},
    })
}
