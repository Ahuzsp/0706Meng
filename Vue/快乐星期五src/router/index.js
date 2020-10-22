import VueRouter from "vue-router";
import Vue from 'vue';
import Home from '@/views/Home';
import Score from '@/views/Score';
import Question from '@/views/Question';

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Home
    },{        
        path:'/score',
        component:Score,
        name:'score'
    },{
        path:'/Question/:num',
        component:Question
    }
]

export default new VueRouter({routes})