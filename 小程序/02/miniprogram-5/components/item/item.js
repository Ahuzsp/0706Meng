
import mx from '../behaviors/index.js'

// components/item/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:Number
  },

  /**
   * 组件的初始数据
   */
  behaviors:[mx],

  data:{
    msg:'亲生的没得说'
  },

  relations:{ 
    '../box/box':{
      type:'child',
      linked(box){
        box.setData({
          msg:this.data.msg
        })
      }
    }
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    del(){
      this.triggerEvent('myevent');
    }
  }
})
