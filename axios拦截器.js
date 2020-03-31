import axios from 'axios'  //引入axios
//下面这两个不一定需要引入，看你项目需要拦截的时候做什么操作，但是一般都需要引入store
import router from '@/router'  //引入router
const myWay = axios.create ({
    baseUrl : process.env.BASE_API,
    timeOut: 5000,
    responseType: 'JSon',
    withCridentials: true,    //是否允许带cookie这些
    headers: {
        'Content-type' : 'application/json;charset=utf-8'
    }
})
myWay.interceptors.request.use(
    config => {
        if(localStorage.getItem('token')){  //判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.authorization = localStorage.getItem('token')
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)
myWay.interceptors.response.use(
    response =>{
        if(response.data.code){
            switch(response.data.code){
                case 1002:
                    localStorage.getItem('token') = false
                    router.replace({
                        path: 'login'
                    })
            }
        }
        return response
    },
    error =>{
        return Promise.rejected(err.response.status)
    }
)
export default myWay

import myWay from './axios'

/* 验证登陆 */
export function handleLogin (data) {
  return myWay.post('/ds/user/login', data)
}
