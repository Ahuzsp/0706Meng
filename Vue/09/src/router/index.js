import VueRouter from "vue-router"
import Vue from 'vue'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Userinfo from '@/views/Userinfo'

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        component:Home,
        name:'home'
    },{
        path:'/login',
        component:Login,
        name:'login'
    },{
        path:'/userinfo',
        component:Userinfo,
        name:'userinfo'
    }
]

export default new VueRouter({routes})