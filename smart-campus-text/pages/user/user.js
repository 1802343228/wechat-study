// pages/user/user.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myInfo : {},
        isChatTop : false,//是否置顶聊天
        silence : true //是否消息免打扰

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var app = getApp().globalData;
    //     this.commonFunction = app.commonFunction;
    //     this.commonFunction.getUserInfo.call(this);
    //     this.setData({
    //         myInfo : this.data.myInfo,
    //         API_URL : app.API_URL
    //     })
    var that = this
   var urlStr = app.globalData.BaseURL + '/sysAdmin/data';
        wx.request({
          method: "GET",
          url: urlStr,
          header:{
            'Content-Type':'application/json'
          },
          dataType: "json",
          data:{
            name:"poi"
          },
          success:function(res) {
            that.setData({
              myInfo : res.data.data
            })
            console.log(res.data.data)
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
  //  this.commonFunction.getUserInfo.call(this);
  //   this.setData({
  //       myInfo : this.data.data
  //   });
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
  bindLogin:function () {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  changeAvatar : function(){
    var that = this;
    var urlStr = app.globalData.BaseURL + '/sysAdmin/upload';
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
          wx.uploadFile({
           // url:that.data.API_URL +'uploadavatarurl',
            filePath:res.tempFilePaths[0],
            name:'avatar',
            url:urlStr,
            filePath:res.tempFilePaths[0],
            header: {
              'Content-Type': 'multipart/form-data'
            }, // 设置请求的 header
            formData: {id:that.data.myInfo.id}, // HTTP 请求中其他额外的 form data
            success: function(info){
                console.log(info);
                that.setData({
                    'myInfo.avatar' : res.tempFilePaths[0]
                });
                wx.setStorageSync('avatar', res.tempFilePaths[0]);
            }
          })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
}
})