
import mx from '../behaviors/index.js'

// components/box/box.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    str:String
  },

  relations:{
    '../item/item':{
      type:'parent',
    }
  },

  /**
   * 组件的初始数据
   */
  behaviors:[mx],
  
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
