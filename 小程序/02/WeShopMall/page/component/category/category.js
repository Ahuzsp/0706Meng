// page/component/category/category.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [//分类选项
      { name: '果味', id: 'guowei' },
      { name: '蔬菜', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '粗茶', id: 'cucha' },
      { name: '淡饭', id: 'danfan' }
    ],
    curIndex:0,
    detail:[], //右边选项内容的详情数据
    toView:'guowei',
    isScroll: false  //设置是否滚动,必须为false,scroll-into-view才有效
  },
  switchTab(ev){
    //侧边选项的点击事件
    const self = this;
    //让scroll-view可以滚动
    this.setData({
      isScroll:true
    });
    console.log(ev);
    setTimeout(function(){
      //修改toView和curIndex
      self.setData({
        toView:ev.target.dataset.id,
        curIndex:ev.target.dataset.index
      });
    },0);
    //1ms后禁用滚动
    setTimeout(function () {
      //修改toView和curIndex
      self.setData({
        isScroll:false
      });
    }, 1);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var detail = require('../../../data/cate-detail.js');
    //data中的数据获取通过this.data.xxx获取
    //data中的数据修改必须通过setData设置
    this.setData({
      detail
    });
    console.log(this.data.detail);
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