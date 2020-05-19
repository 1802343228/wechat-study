//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movies:[  
      {
        url:'/image/lun1.jpg'
      } ,  
      {
        url:'/image/lun2.jpeg'
      }  
      ] ,
      shop:[
        {
          title:'超市',
          name:'京东超市',
          color: 'rgb(197, 96, 63)'
      },
      {
        title:'数码',
        name:'数码电器',
        color: 'rgb(201, 104, 120)'
    },
    {
      title:'服饰',
      name:'京东服饰',
      color: 'blanchedalmond'
  },
  {
    title:'生鲜',
    name:'京东生鲜',
    color: 'rgb(44, 128, 34)'
},
{
  title:'到家',
  name:'京东到家',
  color: 'rgb(108, 196, 67)'
},
{
  title:'服务',
  name:'充电缴费',
  color: 'rgb(78, 145, 96)'
},
{
  title:'京豆',
  name:'领取京豆',
  color: 'rgb(36, 136, 136)'
},

{
  title:'领券',
  name:'领券优惠',
  color: 'rgb(87, 209, 154)'
},
{
  title:'借钱',
  name:'无息借钱',
  color: 'rgb(190, 95, 40)'
},
{
  title:'会员',
  name:'Plus会员',
  color: 'rgb(73, 121, 224)'
},
    ],
    goods:[
      {
        img:'/image/Texas.png',
        title:'拉普牌德克萨斯',
        wuliu:'企鹅物流',
        price:'￥2020',
      },
      {
        img:'/image/Texas.png',
        title:'拉普牌德克萨斯',
        wuliu:'企鹅物流',
        price:'￥2020'
      },
      {
        img:'/image/Texas.png',
        title:'拉普牌德克萨斯',
        wuliu:'企鹅物流',
        price:'￥2020'
      },
      {
        img:'/image/Texas.png',
        title:'拉普牌德克萨斯',
        wuliu:'企鹅物流',
        price:'￥2020'
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  }
})
