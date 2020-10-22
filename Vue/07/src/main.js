
import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store'
import axios from 'axios'
import './http'

// 把axios的放到Vue的原型链上，则所有的Vue组件都可以访问axios
Vue.prototype.$axios = axios;

// bus传参的第三方Vue实例.
let bus = new Vue();
// 把bus放到Vue的原型链上，则所有的Vue组件都可以访问bus
Vue.prototype.$bus = bus;

// import flag from './a.js'
// import {x,y} from './a.js'

// 起别名,给x和y起别名a和b
// import {x as a,y as b} from './a.js'
// import {a,b} from './a.js'
// console.log(a,b);

// 一次性获取所有数据,都存到data对象中.
// import * as data from './a.js'
// console.log(data.x,data.y,data.n,data.m,data.i,data.j);

// 这是老的语法的导入.(插件语法)
// let {x,y,n,m,j,i} = require('./a.js');
// console.log(x,y,n,m,j,i);

function fn(){
  // require属于AMD规范。
  let {x,y,n,m,j,i} = require('./a.js');
  console.log(x,y,n,m,j,i);
}

fn();



new Vue({
  "router":router,
  store,
  "render":h=>h(App),
  "components":{App}
}).$mount('#app')