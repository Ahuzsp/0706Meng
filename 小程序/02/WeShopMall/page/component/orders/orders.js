// page/component/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasAddress:false,  //是否有地址信息
    address:{},  //地址对象
    orders:[],   //商品数据
    totalPrice:0  //总数量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getAddress();
      this.getOrders();
  },
  getAddress(){//获取地址
    var addr=wx.getStorageSync('address');
    if(addr){
      this.setData({
        address:addr,
        hasAddress:true
      });
    }
  },
  getOrders(){  //获取商品数据
    var cartList=wx.getStorageSync('cartList');
    var orders=[];//商品数据
    var totalPrice=0;
    if(cartList){
      for (var k in cartList) {
        if (cartList.hasOwnProperty(k)) {
          orders.push(cartList[k]);
          totalPrice+=parseFloat(cartList[k].total*cartList[k].price);
        }
      }
    }

    //设置商品数据
    this.setData({
      orders,
      totalPrice
    });
  },
  //付款按钮的点击事件
  toPay(){
    var self=this;

    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      text:'center',
      success(res){
        console.log(res);
        if(res.confirm){
          //确定则添加到订单中
 
        var ordersData=wx.getStorageSync('orders')||[];//获取订单数据
        
        ordersData.push({
          "number": "A4"+(Math.random()*100000-1000).toFixed(0),
          "status": "待付款",
          "money": self.data.totalPrice,
          "goods": self.data.orders
        });
     
        wx.setStorageSync('orders', ordersData );//存放到订单存储中
       
          //设置订单
          wx.setStorage({
            key: 'orders',
            data: ordersData,
          });
          //跳转用户界面
          wx.switchTab({
            url: '/page/component/user/user'
          })
        }
      }
    })
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
    var self=this;

    //获取地址数据
    wx.getStorage({
      key:'address',
      success:function(res){
        console.log(res);
        if(res.data){
          //将获取到的数据设置到data中
          self.setData({
            hasAddress:true,
            address:res.data
          })
        }
      }
    })
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