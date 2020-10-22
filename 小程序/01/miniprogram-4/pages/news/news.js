
// import num from '../../common/index.js'
let num = require('../../common/index.js');
console.log('num',num);

// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'hello 小程序',
    obj:{name:'幂幂',age:888,height:168},
    arr:[1111,2222,3333],
    cn:'red',
    flag:false
  },

  fn(ev){
    // console.log(888)
    let num = ev.target.dataset.num;
    // console.log(num);
    // console.log(this.data.msg);
    // this.data.msg = '我去';

    // this.setData({
    //   msg:'我去'
    // })

    // this.data.arr.push(4);
    // this.setData({
    //   arr:[...this.data.arr]
    // })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  }
})
