// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    goods:[
      {
        id:1,
        name:'芝士荔荔',
        price:'32',
        num:1
      },
      {
        id:1,
        name:'芝士桃桃',
        price:'29',
        num:1
      },
      {
        id:3,
        name:'芒果雪乐',
        price:'22',
        num:1
      },
      {
        id:4,
        name:'芝士芒芒',
        price:'27',
        num:1
      },
    ]

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
  onBuyGoods: function(e) {
    e.detail //自定义组件触发事件时提供的detail对象
    console.log(e.detail)
    wx.navigateTo({
      url: '../../pages/detail/detail?item'+JSON.stringify(e.detail),
    })
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