// pages/todolist/todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      id:1,
      name:'canvas',
      status:1
      },{
      id:2,
      name:'vue组件',
      status:1
      },{
      id:3,
      name:'小程序',
      status:1
      },{
      id:4,
      name:'英语',
      status:1
      }],
      addText: ''
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

  },
  setInput: function(e) {
    this.setData({
      addText: e.detail.value
    })
  },
  addTodoHide: function() {
     this.setData({
       addShow:false, //控制添加输入面板隐藏
       focus:false, //失去焦点
       addText:''//清空值
     })
  },
  addTodo:function() {
    //检查有没有输入
    if(!this.data.addText.trim()) {
      return
    }
    var temp = this.data.list //取出List
    var addT = {
      id: new Date().getTime,//取出当前时间
      name: this.data.addText,
      status:1
    }
    temp.push(addT)//添加新的todo
    this.showCur(temp) //更新到list
    this.addTodoHide()
    wx.setStorage({
      data: list,
      key: 'temp',
    })
    wx.showToast({//weui toast组件
      title: '添加成功',
      icon: 'success',
      duration: 1000
    })
  },
  changeStatus:function(e) {
    var _this = this
    var item = e.currentTarget.dataset.item
    var temp = _this.data.list
    temp.forEach(el =>{
      if(el.id === item) {
        if(el.status ===1 ){
          el.status = 0
          _this.showCur(temp)
          wx.setStorage({
            data: temp,
            key: 'list',
          })
          wx.showToast({
            title: '已完成任务',
            icon: 'success',
            duration: 1000
          })
        } else {
          wx.showModal({
            content: '该任务已完成，确定重新开始任务？',
            confirmText: '确定',
            cancelText: "不了",
            success: function(res) {
              if(res.confirm) {
                el.status = 1
                _this.showCur(temp)
                wx.setStorage({
                  data: temp,
                  key: 'list',
                })
              }else {
                return console.log("不操作")
              }
            }
          })
        }
      }
    })
  },
  showCur: function(data) {
    this.setData({
      list:data,
    })
  },
})