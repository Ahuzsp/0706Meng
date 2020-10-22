//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    arr: [1111,2222,3333],
    list: [
      {content:'你好',id:1},
      {content:'我好',id:2},
      {content:'他好',id:3}
    ]
  },
  
  up(ev){

    // let i = ev.target.dataset.index;
    // let arr = this.data.arr;
    // [arr[i],arr[i-1]] = [arr[i-1],arr[i]];

    // this.setData({
    //   arr:[...arr]
    // })

    let i = ev.target.dataset.index;
    let list = this.data.list;
    [list[i],list[i-1]] = [list[i-1],list[i]];

    this.setData({
      list:[...list]
    })

  },
  onLoad: function () {
  }
})
