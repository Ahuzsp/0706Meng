//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    msg: '来自logs页面的msg数据',
    fruits:[],
    sex:'男',
    flag:true,
    str:''
  },

  fn(ev){
    this.setData({
      msg:ev.detail.value
    })
  },

  choose(ev){
    this.setData({
      fruits:ev.detail.value
    })
  },

  selectSet(ev){
    console.log(ev.detail.value);
    this.setData({
      sex:ev.detail.value
    })
  },

  show(ev){
    this.setData({
      flag:ev.detail.value
    })
  },

  getMsg(ev){
    this.setData({
      str:ev.detail
    })
  },

  onLoad: function () {
    
  }
})
