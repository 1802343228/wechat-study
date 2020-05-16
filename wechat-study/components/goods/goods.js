// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:{}
    }

  },
  options:{
    styleIsolation: 'shared',
    multipleSlots: true //在组件定义时的选项中启用多solt支持
  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    buyTap: function(e) {
      var myEventDetail = e.currentTarget.dataset;//detail对象 提供给事件监听函数
      var myEventOption = {}//触发事件的选项
      this.triggerEvent('myevent',myEventDetail,myEventOption)
    },
  },
  bindMinus:function(){
    let num = this.data.num
    //大于1才可以减
    if(num>1) {
      num --;
    }
  },
  bindAdd:function() {
    let num = this.data.num
    num++;
  },
  changeTab:function(e) {
    var num = e.detail.value;
    this.setData({
      num:num
    })
  },
})
