
import axios from 'axios'

axios.defaults.baseURL = 'http://tt.linweiqin.com/api/tt/'

// 获取用户数据中的token字符串
const token = JSON.parse(localStorage.getItem('wdata')).oauth_token || '';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {

    console.log(config.method);

    if(config.method == 'post'){
        // 把所有post请求的data参数内的oauth_token的值设置为用户的token.
        config.data.oauth_token = token;
    }else if(config.method == 'get'){
        // 把所有get请求的params参数内的oauth_token的值设置为用户的token.
        config.params.oauth_token = token;
    }
   
    // config.params.oauth_token = token;
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});