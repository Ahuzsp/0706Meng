<template>
    <div>
        <h3>登录11111111111</h3>
        <div>{{msg}}</div>
        <input type='text' />
        <input type='password' />
        <button>登录</button>
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    computed:{
        ...mapState(['msg'])
    }
}
</script>

<style>

</style>