<template>
    <div> 
        <div class='login-dialog'>
            <h3>{{currentState?"登录":"注册"}}</h3>
            <div>
                <input type="text" v-model='username' />
            </div>
            <div>
                <input type="password" v-model='password' />
            </div>
            <div>
                <input type="button" @click='handler' :value='currentState?"登录":"注册"' />
            </div>
            <p>登陆/注册即表示你同意 用户协议和 隐私条款</p>
            <button @click='currentState=!currentState'>{{currentState?"注册用户":"登录"}}</button>
        </div>
    </div>
</template>

<script>

import {mapMutations} from 'vuex'

export default {
    data(){
        return {
            // 当前是登录还是注册
            currentState:true,
            // 账户名
            username:'',
            // 密码
            password:''
        }
    },
    methods:{
        ...mapMutations(['saveUserInfo']),
        
        // 注册逻辑
        registry(){
            // 从this获取两个数据
            let {username,password} = this;
            // 注册
            this.$axios.post('createUser',{
                username,
                password
            }).then(res => {
                console.log(res.data)
            })
        },

        login(){

            // 从this获取两个数据
            let {username,password} = this;

            this.$axios.post('loginCheck',{
                username,
                password
            }).then((res)=>{
                // 弹出提示信息
                alert(res.data.msg);
                console.log(res.data);

                // 登录成功存储用户数据到本地存储.方便刷新之后还能看见用户数据.
                localStorage.setItem('wdata',JSON.stringify(res.data.wdata));

                // 把用户数据存到Vuex
                this.saveUserInfo(res.data.wdata);

                // 登录成功直接跳到首页,并传递用户数据.
                this.$router.replace({name:'home'});
            })
        }
    },
    computed:{
        handler(){
            return this.currentState ? this.login : this.registry
        }
    }
}
</script>

<style scoped>
    .login-dialog{
        border:1px solid #000;
        width: 400px;
        height:250px;
        padding: 5px;
    }
</style>