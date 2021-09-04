import axios from 'axios'
import {notification} from 'ant-design-vue';
import {getAuthToken, removeAuthToken} from "@/utils/local-storage";
import {getLocale} from '@/utils/cookie';
import {i18n} from "@/plugins/i18n";
// import VueI18n from '@/plugins/i18n'


// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 50000 // request timeout
  // withCredentials: true, // send cookies when cross-domain requests
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    config.headers['Accept-Language'] = getLocale()
    config.headers['Authorization'] = getAuthToken()
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
    console.log(error.response)
    if (error.response) {
      if (error.response.status === 401) {
        removeAuthToken()
      } else {
        const description = error.response.data && error.response.data.message ?
          error.response.data.message : error.response.statusText;
        notification.error({
          key: 'error',
          message: i18n.t('message.error'),
          description: description
        })
      }
    }
    return Promise.reject(error)
  }
)

export default service
