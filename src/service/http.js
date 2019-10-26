import axios from 'axios'
// import router from '@/router'
// import Cookies from 'vue-cookie'
// axios 配置
axios.defaults.baseURL = 'fixedassetweb'
axios.defaults.headers.post['Content-Type'] = 'application/json'
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDEwJHAxWEh3Q2ZFR1pmeDJIRU81bXFJZy4uZUhHUWVydEEweWgzR09RQjE5MEtNclBkU3FucVkuIiwicm9sZSI6ImFkbWluIiwiZGF0YSI6IiIsImV4cCI6MTU1OTkwODg2OCwiaWF0IjoxNTU3MzE2ODY4LCJpc3MiOiJtYW5hZ2VyX2JhY2tlbmQiLCJzdWIiOiIxIn0.MlgEk8Pwm7e55ttpn2awU0GyYG5wc5qTxy2-Cy3L6wg'
// Cookies.set('token', token, 1)
// axios.defaults.headers.common['token'] = Cookies.get('token')
// http response 拦截器
/* eslint consistent-return: [0, { "treatUndefinedAsUnspecified": false }] */
axios.interceptors.response.use(response => response, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // router.replace({
        //   path: '/login'
        // })
        break
      default:
        break
    }
    return Promise.reject(error.response.data)
  }
})

export default axios
