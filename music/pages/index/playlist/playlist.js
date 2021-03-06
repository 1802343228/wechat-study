// pages/index/playlist/playlist.js
const API = require('../../../api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlist:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://localhost:8080/song/list',
      data:{},
      header: {
        'Content-Type':'application/json'
      },
      success:function(res) {
        that.setData({
          playlist:res.data.data
        })
        console.log(res.data.data)
      }
    })
    var audioCtx = wx.createInnerAudioContext();
    this.setData({
      audioCtx:audioCtx
    })
    this.getBanner()
  },
  getBanner:function(){
    API.getBanner({
      type:2
    }).then(res => {
      if(res.code === 1) {
        this.setData({
          banner:res.banners
        })
      }
    })
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
  change:function() {
  }
})