
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/css/style.css'
import axios from 'axios'
import '@/http'

Vue.prototype.$axios = axios;

new Vue({
    el:'#app',
    render:h=>h(App),
    components:{App},
    router
})