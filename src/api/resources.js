import axios from 'axios'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 15000//请求超时时间
})

service.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
})

service.interceptors.response.use(
    response => {
    /**
    * code为非20000是抛错 可结合自己业务进行修改
    */
    //console.log("response:"+response.data)
      return response.data
      // console.log(response.data)
    },
    error => {
      return Promise.reject(error);
    }
  )
  
export default service
