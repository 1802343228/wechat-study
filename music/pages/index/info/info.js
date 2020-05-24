// pages/index/info/info.js
const API = require('../../../api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlist: [],
    playIndex: 0,
    banner: [],
    state: 'paused',
    play: {},
    state:'paused',
    audioCtx: null,
    currentTime: '00:00', //当前时间
    progressPercent: 0, //百分比，控制宽度
    width: 0, //获取progress-line的宽度
    durationTime: 0, //总时间，跳转指定位置使用
  },
  // 化为时分秒
  formatMs2Obj(total) {
    var h = this.repairZero(Math.floor(total / 3600))
    var m = this.repairZero(Math.floor((total - h * 3600) / 60))
    var s = this.repairZero(Math.floor(total - h * 3600 - m * 60))
    //ES6 结构  h:h
    return {
      h,
      m,
      s
    }
  },
  /**
   * 补零
   */
  repairZero(num) {
    return num < 10 ? ("0" + num) : num
  },
  timeupdate(e) {
    var index = this.data.playIndex
    var obj1 = this.formatMs2Obj(e.detail.currentTime)
    console.log(this.data.playlist[index].duration)
    var obj2 = this.formatMs2Obj(this.data.playlist[index].duration)
    var str1 = obj1.m + ":" + obj1.s
    var str2 = obj2.m + ":" + obj2.s
    // 
    if (this.data.currentTime !== str1) {
      // 更新当前时间
      this.setData({
        currentTime: str1,
        progressPercent: e.detail.currentTime * 100 / this.data.playlist[index].duration
      })
    }
    // 赋值总时间，每次总时间一致不用赋值
    if (this.data.playlist[index].duration !== str2) {
      this.data.durationTime = this.data.playlist[index].duration //总时间
      this.setData({
        duration: str2
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://localhost:8080/song/list',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          playlist: res.data.data
        })
        console.log(res.data.data)
      }
    })
    var audioCtx = wx.createInnerAudioContext();
    this.setData({
      audioCtx: audioCtx
    })
    this.getBanner()
    this.getTime()
  },
  getBanner: function () {
    API.getBanner({
      type: 2
    }).then(res => {
      if (res.code === 200) {
        this.setData({
          banner: res.banners
        })
      }
    })
  },
  getTime:function() {
     // 获取节点，获取progress-line宽度width
     var query = wx.createSelectorQuery()
     var that = this;
     query.select('.progress-line').boundingClientRect(function(rect) {
       that.setData({
         width: rect.width//宽度
       })
     }).exec();
  },
  seek(e) {
    // 点击白色进度条任意位置，红色进度条到达点击处
    // 获取当前位置
    var offsetX = e.touches[0].pageX - e.currentTarget.offsetLeft
    // 获取当前位置站总宽度的百分比
    var p = offsetX / this.data.width
    // seek跳转至指定位置，
    // this.data.durationTime*p,获取位置百分比在总时间中的占比
    this.audioCtx.seek(this.data.durationTime*p)
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
  swichNav: function (e) {
    wx.navigateTo({
      url: '/pages/index/' + e.currentTarget.dataset.item + "/" + e.currentTarget.dataset.item,
    })
  },
  play: function () {
    let index = this.data.playIndex
    this.setData({
      play: this.data.playlist[index],
      playIndex: index
    })
    console.log(this.data.audioCtx)
    console.log(this.data.playlist[index].src)
    this.data.audioCtx.src = this.data.playlist[index].src
    this.data.playlist[index].duration = this.data.audioCtx.duration
    this.data.audioCtx.play()
    this.setData({
      state: 'running'
    })
    console.log('开始播放')
  },
  pause: function () {
    this.data.audioCtx.pause()
    this.setData({
      state: 'paused'
    })
    console.log('暂停播放')
  },
  next: function () {
    var index = this.data.playIndex >= this.data.playlist.length - 1 ? 0 : this.data.playIndex + 1
    // this.setMusic(index)
    this.setData({
      play: this.data.playlist[index],
      playIndex: index
    })
    console.log(this.data.audioCtx)
    console.log(this.data.playlist[index].src)
    this.data.audioCtx.src = this.data.playlist[index].src
    this.data.playlist[index].duration = this.data.audioCtx.duration
    this.data.audioCtx.play()
  },
  sliderChange:function(e) {
    var second = e.detail.value*
    this.audioCtx.duration/100
    this.audioCtx.seek(second)
  }
})