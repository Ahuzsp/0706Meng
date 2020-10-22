<template>
    <div>
        <h3>{{title}}</h3>
        msg:{{msg}}
        <p>首页的内容..<span>2018-07-22</span></p>
    </div>
</template>

<script>

export default {
    data(){
        return {
            title:'',
            msg:''
        }
    },
    mounted(){
        this.$axios.get('data.json').then((res)=>{
            this.title = res.data.title;
        })
    },
    created(){
        this.$bus.$on('myevent',(res)=>{
            this.msg = res
        })
    }
}
</script>

<style>

</style>