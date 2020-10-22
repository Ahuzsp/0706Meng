// page/component/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{}
  },
  formSubmit(e){
      //提交数据
      console.log(e);
      const value = e.detail.value;
      if (value.name && value.phone && value.detail){
          //将信息存储到本地存储中
          wx.setStorage({
            key:'address',
            data:value,
            success(){
              wx.navigateBack();  //成功后返回
            }
          })

      }else{
        //信息不全
        wx.showModal({
          title:'提示',
          content:'请填写完整资料',
          showCancel:false
        })
      }
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
    let self=this;

    //获取已有的地址信息
    var addr= wx.getStorageSync('address');
    console.log(addr);
    
    //获取成功
     this.setData({
      address : addr||{}
    });

    //判断是否有地址信息
    setTimeout(function(){
      if(!self.data.address.detail){
        console.log(self.data.address);
        
        wx.showModal({
          title:"询问",
          content:"目前还没有收获地址，是否访问您的收货列表选择一个地址?",
          success:function(res){
            console.log(res.confirm);
            //调用接口成功
            if(res.confirm){
              //如果确定
              wx.chooseAddress({
                success:function(res){
                  console.log(res);//返回用户选择的收货地址
                  var detail=res.provinceName+res.cityName+res.countyName+res.detailInfo+',邮编:'+res.postalCode;
                  var addr={
                    name:res.userName,
                    phone:res.telNumber,
                    detail
                  };
                  //设置地址
                  wx.setStorage({
                    key:'address',
                    data:addr,
                    success:function(){
                      self.setData({
                        address:addr
                      })
                    }
                  })
                }
              })
            }
          }
        })
      }

    },0);
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