<template>
    <div class='home'>
        <div class='music-content'>
            <div class='music-title'>
                <h3>莫比乌斯音乐合</h3>
                <input type="text" v-model='keywords' @keyup="insertKeyWords">
            </div>
            <div class='music-body'>
                <div class='music-list'>
                    <ul>
                        <li :class='{gray:i%2==0}' v-for='(item,i) in music' :key='item.id'>
                            <div class='play-music' @click='playMusic(item.id)'></div>
                            <div class='music-name'>{{item.name}}</div>
                            <!-- <div :class='{"play-mv":true,hasmv:item.mvid!=0}'></div> -->
                            <div class='play-mv' v-if='item.mvid!=0' @click='toMv(item.mvid)'></div>
                            <div v-else class='box'></div>
                        </li>
                    </ul>
                </div>
                <div class='music-poster'>
                    <div :class={handler:true,move:isplay}></div>
                    <div :class={disc:true,move:isplay}>
                        <img width="150" height="150" :src="url" alt="">
                    </div>                  
                </div>
                <div class='music-comment'>
                    <h3>热门评论</h3>
                    <ul>
                        <li v-for='item in comments' :key='item.commentId'>
                            <div>
                                <img width="30" height='30' :src="item.user.avatarUrl" alt="">
                            </div>
                            <div>
                                <div class='person-name'>{{item.user.nickname}}</div>
                                <div class='comment-content'>{{item.content}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <audio @pause='stopMusic' @play="continueMusic" :src='musicUrl' autoplay controls />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 搜索关键字
            keywords:'热门',
            // 音乐列表
            music:[],
            // 评论列表
            comments:[],
            // 封面地址
            url:'',
            // 是否播放状态
            isplay:false,
            // 当前播放的音乐地址
            musicUrl:''
        }
    },
    methods:{
        // 跳转到vm路由
        toMv(mvid){
            // 跳转到mv路由,并且传递当前的歌曲的mvid
            this.$router.push({path:'/mv',query:{mvid}})
        },
        continueMusic(){
            // 让唱碟转
            this.isplay = true;
        },
        stopMusic(){
            // 让唱碟不转
            this.isplay = false;
        },
        async playMusic(id){
            // 让唱碟转
            this.isplay = true;
            // 请求音乐播放地址
            let data = await this.getData('song/url',{id});
            // 播放音乐
            this.musicUrl = data.data.data[0].url;
            // 请求音乐封面
            this.getPoster(id);
            // 请求评论;
            this.getComment(id);
        },
        getData(url,params){
            // 请求数据
            return this.$axios.get(url,{params})
        },
        async getPoster(id){
            // 请求封面
            let url = await this.getData('song/detail',{ids:id})
            // 渲染封面
            this.url = url.data.songs[0].al.picUrl;
        },
        async getComment(id){
            // 根据请求的音乐列表内的第一个首歌,请求评论数据
            let comments = await this.getData('comment/hot?type=0',{id});
            // 渲染视图
            this.comments = comments.data.hotComments;
        },
        // 输入关键字
        insertKeyWords(ev){
            // 如果按的是回车
            if(ev.keyCode == 13){
                this.getMusicData();
            }
        },
        async getMusicData(){
            // 请求音乐列表
            let music = await this.getData('search',{keywords:this.keywords});
            // 渲染视图
            this.music = music.data.result.songs;
            // 请求评论;
            this.getComment(this.music[0].id);
            // 请求音乐封面
            this.getPoster(this.music[0].id);
        }
    },
    mounted(){
        // 视图挂载默认请求一次数据.
       this.getMusicData();
    }
}
</script>

<style scoped>
    audio{
        width: 800px;
        border-radius: 0;
    }
    .handler{
        width: 92px;
        height: 128px;
        background-image: url(../assets/player_bar.png);
        position: absolute;
        top:10px;
        left:50%;
        transform-origin: 10px 10px;
        transform: rotate(-25deg);
        transition:1.5s;
        z-index: 10;
    }
    .handler.move{
        transform: rotate(20deg);
    }
    .music-poster{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .disc.move{
        animation:dance 4s linear infinite;
    }

    @keyframes dance{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }

    .disc{
        background-image: url(../assets/disc.png);
        width: 254px;
        height: 255px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .disc>img{
        border-radius: 50%;
    }
    .comment-content{
        font-size:12px;
    }
    .music-comment li{
        display: flex;
        padding: 10px;
    }
    .person-name{
        color:#000;
    }
    .music-comment li>div{
        padding-left:8px;
    }
    .music-comment h3{
        color:#000;
        font-weight: bold;
        line-height: 30px;
    }
    .music-comment img{
        border-radius: 50%;
    }
    .music-poster{
        flex-grow: 1;
    }
    .music-body{
        display:flex;
    }
    .box{
        width: 30px;
        height: 20px;
    }
    .hasmv{
        /* opacity: 0; */
        visibility: hidden;
    }
    .gray{
        background-color: rgba(255,255,255,.5);
    }
    .music-list,.music-comment{
        width: 200px;
        height: 480px;
        overflow: auto;
    }
    .music-list li{
        display: flex;
        height: 40px;
        align-items: center;
        justify-content: space-between;
    }
    .music-name{
        flex-grow: 1;
        text-align: center;
        text-overflow:ellipsis; 
        white-space:nowrap;
        overflow: hidden;
    }
    .play-music,.play-mv{
        width: 30px;
        height: 20px;
        background-image: url(../assets/table.png);
        cursor: pointer;
    }
    .play-music{
        background-position:-18px 108px;
    }
    .play-mv{
        background-position:-28px 86px;
    }
    .home{
        background-image:url(../assets/bg1.jpeg);
        background-size:cover;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .music-content{
        height: 600px;
        width: 800px;
        background-color:rgba(255,255,255,.3);
    }
    .music-title{
        display: flex;
        background-color:#29abd3;
        height: 60px;
        justify-content: space-between;
        padding: 0 20px;
        align-items: center;
    }
    .music-title>input{
        border-radius: 20px;
        line-height:30px;
        padding: 0 15px;
    }
</style>