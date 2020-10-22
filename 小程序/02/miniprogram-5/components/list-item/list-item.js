// components/list-item/list-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // str:String
    str:{
       type:String,
       value:'str的默认值'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:'第一个小程序组件'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    fn(){
      this.setData({
        msg:'msg变化了'
      })
    },
    setMsg(){
      // console.log(this.properties.str);
      // console.log(this.data.str);
      // console.log(this.properties.msg);

      this.setData({
        str:'强行逆天'
      })
    },
    sandMsg(){
      this.triggerEvent('myevent',this.data.msg);
    }
  }
})
