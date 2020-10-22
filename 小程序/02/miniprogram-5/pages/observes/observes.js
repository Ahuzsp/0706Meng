// pages/observes/observes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
  },

  delObserves(){
    console.log(99999)
    this.setData({
      flag:!this.data.flag
    })
  },
  onLoad(){
    console.log('observes页面创建')
  },
  onShow(){
    console.log('observes页面切换')
  },
  onReady(){
    console.log('observes页面显示')
  },
  onHide(){
    console.log('observes页面隐藏')
  },
  onUnload(){
    console.log('退出observes')
  },
  onTabItemTap(){
    console.log('点击了tab按钮')
  }
})