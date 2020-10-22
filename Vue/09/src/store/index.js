import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const wdata = JSON.parse(localStorage.getItem('wdata')) || {}

const state = {wdata};

const mutations = {
    // 保存用户数据
    saveUserInfo(state,res){
        state.wdata = res
    }
}

export default new Vuex.Store({
    state,
    mutations
})