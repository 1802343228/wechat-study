// pages/login/login.js
//login.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    username: "",
    password: ""
  },
  onLoad(options) {
    // 初始化提示框
   // this.$wuxToast = app.wux(this).$wuxToast
  },
  /** 监听帐号输入 */
  listenerUsernameInput: function (e) {
    this.data.username = e.detail.value;
  },
  /** 监听密码输入 */
  listenerPasswordInput: function (e) {
    this.data.password = e.detail.value;
  },
  // 登录按钮点击事件
  loginAction: function () {

    var userName = this.data.username;
    var passwords = this.data.password;
   // var that = this;

    if (userName === "") {
      // that.$wuxToast.show({
      //   type: 'text',
      //   timer: 1000,
      //   color: '#fff',
      //   text: "用户名不能为空！",
      wx.showToast({
        title: '用户名不能为空！',
        icon: 'success',
        duration: 1000
      })
       console.log('用户名不能为空！')
      // })
      return;
    } if (passwords === "") {
      // that.$wuxToast.show({
      //   type: 'text',
      //   timer: 1000,
      //   color: '#fff',
      //   text: "密码不能为空！",
      wx.showToast({
        title: '密码不能为空！',
        icon: 'fail',
        duration: 1000
      })
      console.log('密码不能为空！')
      // })
      return;
    }

    //加载提示框

    var urlStr = app.globalData.BaseURL + '/sysAdmin/login';
    wx.request({
      method: "POST",
      url: urlStr,
      dataType: "json",
       data:{
        name: userName,
        password: passwords,
       },
     // }),
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
       // util.hideToast();
        console.log(res.data);
        var code = res.data.code;
        if (code === 1) {
          // 后台传递过来的值
        // var roleId = res.data.data.roleId;
          var token = res.data.data.token;
          // 设置全局变量的值
        //  app.globalData.roleId = res.data.data.roleId;
          app.globalData.token = res.data.data.token;
          // 将token存储到本地
        //  wx.setStorageSync('roleId', roleId);
          wx.setStorageSync('token', token);
        //  console.log("登录成功的roleId：" + roleId);
          console.log("登录成功的token：" + token);
          // 切换到首页
          wx.switchTab({
            url: '/pages/index/index'
          })
        } else {
          wx.showToast({
            title: '登录失败，请稍后重试',
            icon: 'success',
            duration: 1000
          })
             console.log('登录失败，请稍后重试。' + res.data.msg)
        }
      },
      fail: function () {
        console.log("登录失败");
        wx.showToast({
          title: '登录失败，请稍后重试。',
          icon: 'success',
          duration: 1000
        })
            console.log('登录失败，请稍后重试。')
        // })
      }
    })
  }
})
