// page/component/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    interval: 3000, //轮播间隔
    duration: 800,  //一张图片轮播持续时间
    imgUrls:[ //轮播图片列表
      '/image/b1.jpg',
      '/image/b2.jpg',
      '/image/b3.jpg'
    ],
    newest:[  //最近新品数据
      {
        id:'guazi',
        imageUrl:'/image/s4.png',
        title:"瓜子",
        price:"0.01",
        count:"100",
        unit:"g"
      },
      {
        id: 'qincai',
        imageUrl: '/image/s5.png',
        title: "芹菜",
        price: "0.02",
        count: "0.5",
        unit: "斤"
      },
      {
        id: 'sumi',
        imageUrl: '/image/s6.png',
        title: "素米",
        price: "0.03",
        count: "375",
        unit: "g"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('index load....');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('index 初次渲染完成...')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('index 显示出来...');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('index 隐藏了...')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('index 页面卸载了...')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  myFn(){
    //获取数据
    this.data.imgUrls
    //修改数据
    this.setData({})
  }
})