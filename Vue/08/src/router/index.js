import VueRouter from "vue-router";
import Vue from 'vue';
import Home from '@/views/Home'
import Mv from '@/views/MV'

Vue.use(VueRouter);

const routes = [
    {
        path:'/home',
        component:Home
    },{
        path:'/mv',
        component:Mv
    },{
        path:'/',
        redirect:'/home'
    }
]

export default new VueRouter({routes})