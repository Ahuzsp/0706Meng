
import Vue from 'vue';
import App from './App';
import router from './router'
import store from './store'
import './css/style.css'
import axios from 'axios'

Vue.prototype.$axios = axios;

new Vue({
    render:h=>h(App),
    router,
    store
}).$mount('#app')