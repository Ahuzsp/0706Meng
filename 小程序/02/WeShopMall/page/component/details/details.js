// page/component/details/details.js
var detailsData = require('../../../data/details-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:{},  //商品对象
    scaleCart:false, //改变当前值设置添加购物车时的动画
    hasCarts:false,   //购物车是否有数据
    show: false,      //是否显示滚动的动画元素
    totalNum:0,       //购物车中的所有数据的数目     
    curIndex:0,       //当前选中的选项卡
    num:'',            //购物车中当前数据的数量
    nowId:''          //当前商品的id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);

    //获取商品数据
    this.setData({
      goods:detailsData[options.id], //设置商品数据
      num: detailsData[options.id].count, //设置当前商品的基本单价
      nowId:options.id    //当前商品的id
    });

    //获取购物车数据的信息，假设购物车数据存储在Storage中
    //cartList={guazi:{}} //数据存储为键值对
      try {
        var cartList = wx.getStorageSync('cartList');

        //数据获取成功
        if (cartList) {//如果购物车有数据
          var totalNum=0;
          for (var k in cartList) {
            if (cartList.hasOwnProperty(k)) {
              totalNum+=cartList[k].total;  //商品总数量相加
            }
          }

          this.setData({
            totalNum:totalNum,
            hasCarts:true
          })
        }else{
          this.setData({
            totalNum: 0,
            hasCarts: false
          })
        }
      } catch (e) {
        // Do something when catch error
        console.error('localstorage获取出错!');
      }
  },
  //添加数量的+按钮的点击事件
  addCount(){
    //增加商品数量
    var baseCount=+this.data.goods.count;//基准数量
    this.setData({
      num:(+this.data.num+baseCount)
    })
  },

  //添加购物车按钮点击事件
  addToCart(){
      let cartList=null;//购物车列表
      let nowNum=0; //当前商品数量
      let self=this;

    //添加购物车
    //添加前先判断该商品是否有货
    if(this.data.goods.stock==='无货'){
      wx.showToast({
        title:"当前商品暂时缺货!",
        mask:true
      });
      return;
    }

    //获取购物车数据
      try {
        cartList = wx.getStorageSync('cartList');

        //数据获取成功
        if (!cartList) {  //如果购物车数据不存在则初始化为空数组
          cartList={};
        }

        this.setData({
          show: true  //将动画元素显示出来
        });

        nowNum=Math.floor(this.data.num/this.data.goods.count);//当前商品数量

        //判断购物车中是否有当前数据
        if(cartList[this.data.nowId]){
            //如果有则修改数据
            cartList[this.data.nowId].total+=nowNum;
        }else{
          //如果没有，往购物车中添加一条数据
          cartList[this.data.nowId]=Object.assign({},this.data.goods,{
            total:nowNum,  //当前商品总数量
            selected:true
          });    
        }
        
        
        //将数据设置到localStorage中
        wx.setStorage({
          key:'cartList',
          data:cartList,
          success:function(){
            setTimeout(function(){
              self.setData({
                scaleCart:true,
                show:false
              });
            },500);
           
            setTimeout(function(){
              self.setData({
                scaleCart:false,
                totalNum:self.data.totalNum+nowNum  //修改当前页面显示的购物车数量
              });
              
              setTimeout(function(){
                //如果购物车为空则设置购物车为非空
                if(!self.data.hasCarts){
                  self.setData({
                    hasCarts:true
                  })
                }
              },0)

            },500);
          }
        });

      } catch (e) {
        // Do something when catch error
        console.error('localstorage获取出错!');
      }
  },
  bindTap(ev){
      console.log(ev);
      //选项卡的按钮点击事件
      this.setData({
        curIndex:+ev.target.dataset.index
      });
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