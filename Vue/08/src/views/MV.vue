<template>
    <div class='mvplayer'>
        <div>
            <video width="800" height="600" :src="url" autoplay controls></video>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            url:''
        }
    },
    mounted(){
        let mvid = this.$route.query.mvid;
        // 请求音乐mv播放url
        this.$axios.get('mv/url',{
            params:{id:mvid}
        }).then((res)=>{
            console.log(res);
            // 渲染视频
            this.url = res.data.data.url;
        })
    }
}
</script>

<style scoped>
    .mvplayer{
        height:100%;
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: #000;
    }
    .mvplayer>div{
        width: 800px;
        height:600px;
    }
</style>