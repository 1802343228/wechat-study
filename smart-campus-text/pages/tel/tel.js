// pages/tel/tel.js
var app = getApp()
var wxaSortPicker = require('../../utils/wxaSortPicker/wxaSortPicker.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telList:[],
    vague:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this
    // var index = that.index
    // wx.request({
    //   url: app.globalData.BaseURL+'/songList/list',
    //   header:{
    //     'Content-Type':'application/json'
    //   },
    //   success:function(res) {
    //     that.setData({
    //       telList:res.data.data
    //     })
    //     console.log(res.data.data)
    //   }
    // })
    var that = this

    wxaSortPicker.init([
      { name: '中国', value: 'China'},
      { name: '俄罗斯', value: 'Russia' },
      { name: '美国', value: 'America' },
      { name: '澳大利亚', value: 'Australia' },
      { name: '巴西', value: 'Brazil' },
      { name: '韩国', value: 'Korea' },
      { name: '朝鲜', value: 'North Korea' },
      { name: '英国', value: 'Britain' },
      { name: '德国', value: 'Germany' },
      { name: '加拿大', value: 'Canada' },
      { name: '非洲', value: 'New Zealand' },
    ], that);
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
    var that = this
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
  wxaSortPickerItemTap: function(e){
    console.log(e.target.dataset.text);
    console.log(e.target.dataset.value);
  },
  bindDel:function () {
    
  },
  bindSearch:function (e) {
    this.data.vague = e.detail.value
  },
  search:function () {
    var that = this
    var vague = this.data.vague
    if(vague === "") {
      return
    } else {
      var urlStr = app.globalData.BaseURL + '/songList/vague'
      wx.request({
        method: "GET",
        url: urlStr,
        dataType: "json",
         data:{
          context:vague
         },
         header: {
          "Content-Type": "application/json"
        },
        success:function (res) {
          that.setData({
            telList:res.data.data
          })
          console.log(res.data.data)
        }
        })

      
    }
  }
})