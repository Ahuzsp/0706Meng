//app.js
App({
  onLaunch: function (opts) {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);   
  },
  //nLaunch和onShow函数的参数为当前启动或显示的小程序的信息
  onShow: function (opts) {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  onError: function (err) {
    console.log('App Error',err)
  },
  globalData: {
    userInfo: null
  }
})