<template>
  <div class='score'>
    <div class='mask' v-show='flag' @click='flag=false'>
      <img width='280' height="257" src="../img/5-2.png" alt="">
    </div>
    <div class='score-detail'>
      <div class='score-result'>{{score}}分</div>
      <div class='score-tip'>{{tips}}</div>
    </div>
    <div class='score-share'>
      <img width="141" src="../img/4-3.png" alt="" @click='flag=true'>
    </div>
    <div class='score-qrcode'>
      <h3>欢迎来到泽林教育</h3>
      <img width="124" src="../img/4-4.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        // 是否显示遮罩
        flag:false,
        // 正确答案
        rightAnswer:[2,7,12,13,18],
        // 提示信息
        str:['拿墙撞头去吧!辣鸡','整天上课就是瞌睡!','你是一个想逆袭的雕塑','找个10000的工作应该不难','可以,毕业了,流弊','学神驾到!']
      }
    },
    computed:{
      // 根据分数的提示信息.
      tips(){
        let scores = [0,20,40,60,80,100];
        for(let i=0;i<scores.length;i++){
          if(scores[i] == this.score){
            return this.str[i]
          }
        }
      },
      // 计算分数
      score(){

        // 获取答题记录.(如果刷新,则从本地存储获取答题记录)
        let arr = this.$route.params.answer || JSON.parse(localStorage.getItem('answer')) || [];

        // 答题总分
        let score = 0;  
        // 计算分数
        arr.forEach((item,i)=>{
          if(this.rightAnswer[i] == item){
            score += 20;
          }          
        })

        return score
      }
    }
}
</script>

<style scoped>
    .mask{
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0,0.7);
      position: absolute;
      display: flex;
      justify-content: center;
    }
    .score-result{
      margin-top:120px;
      font-size:20px;
      color:red
    }
    .score-tip{
      margin-top:20px;
      color:#000
    }
    .score{
        height:100%;
        background-image: url(../img/4-1.jpg);
        background-size: 100% 100%;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .score-detail{
      width:227px;
      height:213px;
      padding-left:50px;
      background-image: url(../img/4-2.png);
      background-size: 100% 100%;
    }
</style>