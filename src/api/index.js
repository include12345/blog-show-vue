import request from './resources'

export function getFrontArticleList(options) {
    return request({
        url: '/article/getFrontArticleList',
        method:'get',
        params: options,
    })
}

export function getFrontArticle(id) {
    return request({
        url: '/article/'+id+'/getFrontArticle',
        method:'get',
    })
}


export function getPrenext(id, params) {
    return request({
        url: '/article/'+id+'/getPrenext',
        method:'get',
        params: params,
    })
}

export function getApps() {
    return request({
        url: '/getApps',
        method:'get',
        params: {},
    })
}
