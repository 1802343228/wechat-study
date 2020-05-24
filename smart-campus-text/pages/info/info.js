// pages/info/info.js
//获取应用实例
Page({
  data: {
    scrollTop:'',    //滑动的距离
    navFixed:false,  //导航是否固定   
   },
  //页面滑动
  layoutScroll: function (e) {
    this.data.scrollTop = this.data.scrollTop * 1 + e.detail.deltaY * 1;
    console.log(this.data.scrollTop)
    console.log(this.data.navFixed)
    if (this.data.scrollTop <= -200){
      this.setData({
        navFixed:true
      })
    }else{
      this.setData({
        navFixed: false
      })
    }
  }
})