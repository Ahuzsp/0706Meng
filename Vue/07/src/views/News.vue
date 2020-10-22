<template>
    <div>
        <h3>新闻</h3>
        <p>新闻的内容..<span>2018-07-22</span></p>
    </div>
</template>

<script>
export default {
    mounted(){
       this.$bus.$emit('myevent','来自news的数据')
    }
}
</script>

<style>

</style>