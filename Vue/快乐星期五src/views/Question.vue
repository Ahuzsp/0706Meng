<template>
    <div class='question'>
        <div class='tip' v-show='flag' @click='flag=false'>请先选择一个答案才能进入下一题!</div>
        <div class='question-tip'>
            <span>第{{$route.params.num*1+1}}题</span>
        </div>
        <div class='question-item'>
            <h3>{{currentQuestion.topic_name}}</h3>
            <ul>
                <li 
                    v-for='(item,i) in currentQuestion.topic_answer' 
                    :key='item.topic_answer_id' 
                >
                    <div 
                        :class='{option:true,choosed:currentAnswer == item.topic_answer_id}' 
                        @click="selectAnswer(item.topic_answer_id,i)"
                    >
                        {{options[i]}}
                    </div>
                    <span>{{item.answer_name}}</span>
                </li>
            </ul>
        </div>
        <div class='start-btn'>
            <img width="130"  v-if='$route.params.num!=4' src="../img/2-2.png" alt="" @click='toNext' />
            <img width="130" v-else src="../img/3-1.png" alt="" @click='toScore' />
        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex';

export default {
    data(){
        return {
            options:['A','B','C','D'],
            // 答题记录
            answer:[],
            // 是否显示提示信息
            flag:false,
            // 考试用时
            seconds:0,
            // 最大考试时间
            maxTime:50,
            // 题目数据.
            itemDetail:[]
        }
    },
    
    methods:{
        toScore(){
            // 跳转到答题页,并且传递答题记录,方便记分
            this.$router.push({name:'score',params:{
                answer:this.answer
            }});
        },
        // 跳转到下一题
        toNext(){
            let i = this.$route.params.num;
            this.$router.push('/Question/'+(i*1+1));
        },
        // 记录答题id
        selectAnswer(id,index){
            // 根据当前的题目,把对应的id存到答题记录的对应位置
            let i = this.$route.params.num;
            
            // 存储答题记录
            this.answer.splice(i,1,id);

            // 把答题记录存储到本地存储,方便刷新后还可以获取
            localStorage.setItem('answer',JSON.stringify(this.answer));
        }
    },

    computed:{
        // ...mapState(['itemDetail']),
        currentQuestion(){
            // 路由参数。
            let i = this.$route.params.num;
            // 通过路由参数来选择渲染的题目数据
            return i===undefined ? {} : (this.itemDetail[i] || {})
        },
        // 当前的答题记录.用于在后退和前进时保留选中的选项
        currentAnswer(){
            let i = this.$route.params.num;
            return this.answer[i]
        }
    },

    watch:{
        'seconds'(){
            // 如果超过了考试用时,直接跳转到得分页
            if(this.seconds >= this.maxTime){
                this.$router.push({name:'score',params:{
                    answer:this.answer
                }});
            }   
        }
    },

    created(){
        // 刷新后从本地存储获取答题记录.
        this.answer = JSON.parse(localStorage.getItem('answer')) || [];
    },

    // 请求数据.
    mounted(){
        this.$axios.get('data.json').then((res)=>{
            this.itemDetail = res.data;
        })
    },

    // 路由进入答题页后开始.
    beforeRouteEnter(to,from,next){
        next((vm)=>{
            vm.timer = setInterval(()=>{
                vm.seconds += 1
            },1000)
        })
    },

    // 题目切换
    beforeRouteUpdate(to,from,next){

        // 获取当前路由参数.
        let nowIndex = this.$route.params.num;

        // 获取目标路由参数
        let nextIndex = to.params.num;

        // 如果当前题目已经记录了答案并且是跳到下一题.就跳转,否则不能跳转.
        if(this.answer[nowIndex] === undefined && nextIndex > nowIndex){
            this.flag = true;
            next(false);    
        }else{
            next();
        }
    },

    // 路由离开时清除定时器
    beforeRouteLeave(to,from,next){
        // 删除定时器
        clearInterval(this.timer);
        // 初始化时间
        this.seconds = 0;
        // 继续跳转
        next();
    }
}
</script>

<style scoped>
    .tip{
        position: absolute;
        top:40%;
        left:30px;
        font-size:18px;
        color:red;
        padding: 20px;
        background-color:rgba(255,255,255,1);
        border-radius: 5px;
        box-shadow:0 0 3px 3px rgba(0,0,0,0.4);
    }
    .start-btn{
        padding-left:122px;
        margin-top:-70px;
    }
    .option.choosed{
        background-color:red;
    }
    .question{
        height:100%;
        background-image: url(../img/1-1.jpg);
        background-size: 100% 100%;
        overflow: hidden;
        position: relative;
    }
    .question-item{
        width:320px;
        height:282px;
        background-image: url(../img/2-1.png);
        background-size: 100% 100%;
        margin-top:100px;
        margin-left:30px;
        padding-left:50px;
        padding-top:80px;
    }
    .question-item .option{
        width: 18px;
        height: 18px;
        border-radius: 50%;
        text-align: center;
        line-height: 18px;
        border:1px solid #fff;
        margin-right:10px;
    }
    .question-item li,.question-item h3{
        display: flex;
        padding: 5px 0;
    }
    .question-tip{
        position: absolute;
        width: 76px;
        height: 172px;
        background-image: url(../img/WechatIMG2.png);
        background-size: 100% 100%;
        right:20px;
    }
    .question-tip>span{
        display: block;
        margin-top:128px;
        text-align: center;
        font-size: 14px;
        color:brown;
        font-weight: bold;
    }
</style>