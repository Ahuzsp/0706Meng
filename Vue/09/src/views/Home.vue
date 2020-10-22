<template>
  <div id='home'>
        <div class='login' v-if='!wdata.oauth_token'>
           <p>登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</p>
           <button @click='toLogin' class='login-btn'>登录</button>
        </div>
        <div class='userinfo' v-else>
            <div class='userinfo-img'>
               <img @click='toUserInfo' :src="wdata.avator" alt="">
            </div>
            <div>
               <span>头条数:{{wdata.tt_count}}</span>-------
               <span>文章数:{{wdata.article_count}}</span>
            </div>
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    methods:{
        toLogin(){
            this.$router.push('/login');
        },
        toUserInfo(){
            this.$router.push({name:'userinfo',params:{wdata:this.wdata}});
        }
    },
    computed:{
        ...mapState(['wdata']),
    }
}
</script>

<style scoped>
    .login,.userinfo{
        width: 400px;
        height: 200px;
        border:1px solid #000;
        padding: 30px;
    }
    .login-btn{
        width: 250px;
        line-height: 40px;
        background: red;
        border-radius: 4px;
        outline:none;
        border:0;
        cursor: pointer;
    }
    .userinfo-img>img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
</style>