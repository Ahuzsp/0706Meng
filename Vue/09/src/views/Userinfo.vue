<template>
    <div>
        <div class='userinfo-img'>
            <img :src="wdata.avator" alt="">
            <span>{{wdata.nickname}}</span>
        </div>
        <div>
            <span>头条数:{{wdata.tt_count}}</span>-------
            <span>文章数:{{wdata.article_count}}</span>
        </div>
        <hr>
        <h3>头条信息</h3>
        <ul>
            <li v-for='item in tt' :key='item.nid'>
                {{item.content}}
            </li>
        </ul>
        <hr>
        <h3>文章信息</h3>
        <ul>
            <li v-for='item in articles' :key='item.nid' v-html='item.content'></li>
        </ul>
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    data(){
        return {
            tt:[],
            articles:[]
        }
    },
    computed:{
       ...mapState(['wdata'])
    },
    mounted(){
        // 请求头条信息
        this.$axios.post('getArticlesByType',{
            type:'TT',
            // oauth_token:this.wdata.oauth_token
        }).then(res => {
            console.log(res.data);
            this.tt = res.data.articles
        })

        // 请求文章信息
        this.$axios.post('getArticlesByType',{
            type:'article',
            // oauth_token:this.wdata.oauth_token
        }).then(res => {
            console.log(res.data);
            this.articles = res.data.articles
        })
    }
}
</script>

<style scoped>
    .userinfo-img>img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
</style>