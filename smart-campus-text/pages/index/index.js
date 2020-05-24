//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    image:[
      {img:"/asstes/image/lun1.jpg"},
      {img:"/asstes/image/lun2.jpeg"}
    ],
    functionBlock:[
      {
        name:'课程表',
        img:'/asstes/image/lun2.jpeg'
      },
      {
        name:'考务查询',
        img:'/asstes/image/lun2.jpeg'
      },
      {
        name:'图书馆',
        img:'/asstes/image/lun2.jpeg'
      },
      {
        name:'一卡通',
        img:'/asstes/image/lun2.jpeg'
      },
    ],
    todayCourse:[
      {
        courseName:'微信小程序',
        courseTime:'1-2节',
        coursePlace:'教四417'
      },
      {
        courseName:'微信小程序',
        courseTime:'1-2节',
        coursePlace:'教四417'
      }
    ],
    hotInfo:[
      {
        img:'/asstes/image/lun2.jpeg',
        title:'最新通知：教务处近期严查学生上课情况，请同学们注意相关考勤',
        createTime:'2020-01-01'
      },
      {
        img:'/asstes/image/lun2.jpeg',
        title:'最新通知：教务处近期严查学生上课情况，请同学们注意相关考勤',
        createTime:'2020-01-01'
      }
    ]
  },
  onLoad: function () {
   
  },
  changecourse:function () {
    wx.navigateTo({
      url: '/pages/course/course',
    })
  }
})
