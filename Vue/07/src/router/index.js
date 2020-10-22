
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import News from '@/views/News'
import Guide from '@/views/Guide'
import Login from '@/views/Login'

// Vue的插件都需要使用use处理
// 哪些是vue的插件? Vuex,router
// Vue的ui框架都是Vue的插件.element-ui,Vant-ui,Mint-ui
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Home,
            meta:{
                requireLogin:false
            }
        },{
            path:'/news',
            component:News,
            meta:{
                requireLogin:true
            }
        },{
            path:'/guide',
            component:Guide,
            meta:{
                requireLogin:true
            }
        },{
            path:'/login',
            component:Login,
            meta:{
                requireLogin:false
            }
        }
    ]
})

// 全局拦截处理登录权限逻辑
router.beforeEach((to,from,next)=>{
    // 如果需要登录就跳到登录页.如果不需要直接跳转
    if(to.meta.requireLogin){
        next({path:'/login'})
    }else{
        next();
    }
})

export default router;