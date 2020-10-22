<template>
    <div class='home'>
        <div class='title-img'>
            <img width="320" src="../img/1-2.png" alt="" />
        </div>
        <div class='start-btn'>
            <img width="130" src="../img/1-4.png" alt="" @click='toQuestion' />
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        toQuestion(){
            // 跳转到答题页
            this.$router.push('/Question/0')
        }
    }
}
</script>

<style scoped>
    .home{
        height:100%;
        background-image: url(../img/1-1.jpg);
        background-size: 100% 100%;
        overflow: hidden;
    }
    .title-img{
        margin-top:70px;
        margin-left:30px;
    }
    .start-btn{
        padding-left:122px;
    }
</style>