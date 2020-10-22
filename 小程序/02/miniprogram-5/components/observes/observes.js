// components/observes/observes.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  lifetimes:{
    created(){
      console.log('created')
    },
    attached(){
      console.log('attached')
    },
    ready(){
      console.log('ready')
    },
    detached(){
      console.log('组件被移除')
    }
  },

  pageLifetimes:{
    onload(){
      console.log('observes页面创建')
    },
    onShow(){
      console.log('observes页面切换')
    },
    onReady(){
      console.log('observes页面显示')
    }
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    count:10,
    price:20,
    total:200,
    num:100,
    arr:[111,222,333],
    obj:{
      name:'幂幂',
      data:{
        name:'坤坤'
      }
    }
  },

  observers:{
    'num'(){console.log('num发生了变化')},
    'arr[1]'(){},
    'obj.name'(){},
    // 深度监听
    'obj.**'(){},
    // 同时监听两个数据 (类似于Vue的计算属性)
    'count,price'(){
      this.setData({
        total:this.data.count * this.data.price
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    fn(){
      this.setData({
        num:Math.random()
      })
    },
    saveCount(ev){
      this.setData({
        count:ev.detail.value
      })
    },
    savePrice(ev){
      this.setData({
        price:ev.detail.value
      })
    }
  }
})
