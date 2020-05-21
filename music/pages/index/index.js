//index.js
//获取应用实例
const app = getApp()
const API = require('../../api')

Page({
  data: {
    swiperCurrent: 0,
    tab:0,
    playIndex:0,
    banner:[],
    movies: [{
        url: '/image/lun1.jpg'
      },
      {
        url: '/image/lun2.jpeg'
      }
    ],
    playlist: [],
      state: 'paused',
      play: {},
      audioCtx: null
  },
  //事件处理函数
  bindViewTap: function () {
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
      if(res.code === 200) {
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
    // this.setMusic(0)
    // this.setPlay(0)
    // this.getTime(0)
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

  // setMusic:function(index){
  //   this.setData({
  //     playIndex: index
  //   })
  //   console.log(this.data.audioCtx)
  //   console.log(this.data.playlist[index].src)
  //   this.data.audioCtx.src = this.data.playlist[index].src
  // },
  // setPlay:function(index){
  //   this.setData({
  //     play: this.data.playlist[index]
  //   })
  // },
  // getTime:function(index){
  //   this.data.playlist[index].duration=this.data.audioCtx.duration
  //   console.log(this.data.playList[index].duration)
  // },

  swichNav: function (e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindChange: function (e) {
    this.setData({
      tab: e.currentTarget.dataset.item
    });
  },

  play:function() {
    let index = this.data.playIndex
    this.setData({
      play: this.data.playlist[index],
      playIndex: index
    })
    console.log(this.data.audioCtx)
    console.log(this.data.playlist[index].src)
   this.data.audioCtx.src = this.data.playlist[index].src
   this.data.playlist[index].duration=this.data.audioCtx.duration
    this.data.audioCtx.play()
    this.setData({
      state:'running'
    })
    console.log('开始播放')
  },
  pause:function() {
    this.data.audioCtx.pause()
    this.setData({
      state:'paused'
    })
    console.log('暂停播放')
  },
  next:function() {
    var index = this.data.playIndex >= this.data.playlist.length-1?0:this.data.playIndex+1
    // this.setMusic(index)
    this.setData({
      play: this.data.playlist[index],
      playIndex: index
    })
    console.log(this.data.audioCtx)
    console.log(this.data.playlist[index].src)
   this.data.audioCtx.src = this.data.playlist[index].src
   this.data.playlist[index].duration=this.data.audioCtx.duration
   this.data.audioCtx.play()
  },
  audioPlayed: function (e) {
    console.log('audio is played')
  },
  audioTimeUpdated: function (e) {
    this.duration = e.detail.duration;
  },
  swichNav:function(e) {
    this.setData({
      tab:e.currentTarget.dataset.item
    })
    // wx.navigateTo({
    //   url: '/pages/index/'+e.currentTarget.dataset.item+"/"+e.currentTarget.dataset.item,
    // })
  },
  audioInfo:function() {
    wx.navigateTo({
      url: '/pages/index/info/info',
    })
  },
  changeList: function() {
    wx.navigateTo({
      url: '/pages/index/playlist/playlist',
    })
  }
})