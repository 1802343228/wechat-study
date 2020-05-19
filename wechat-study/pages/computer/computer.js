// pages/computer/computer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:'0',
    isClear:false,
    value:null,
    operator: null, // 上次计算符号，null表示没有未完成的计算
    isOperator:false //上一个按下的是不是计算符号
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.calculatorOperations = {
      'divide': (preValue, nextValue) => prevValue / nextValue,
      'multiply': (preValue, nextValue) => prevValue * nextValue,
      'add': (preValue, nextValue) => prevValue + nextValue,
      'subtract': (preValue, nextValue) => prevValue - nextValue,
      'equals': (prevValue, nextValue) => nextValue
    }

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
  numBtn:function(e) {
    let num = e.currentTarget.dataset.item;
    const digit = num[num.length -1]
    if(this.data.isOperator) {
      this.setData({
        result:String(digit),
        isOperator:false
      })
    }else {
      result:this.data.result === '0' ? String(digit) : this.data.result + digit
    }
  },
  resetBtn:function() {
    this.setData({
      result: '0',
      value: null,
      operator: null,
      isOperator: false
    })
  },
  delBtn:function() {
    this.setData({
      result:'0'
    })
  },
  percentBtn:function() {
    const fixed = this.data.result.replace(/^-?\d*\.?/, '')
    var newValue = parseFloat(this.data.result) / 100
        this.setData({
          result: String(newValue.toFixed(fixed.length + 2))
        });
  },
  opBtn: function(e) {
    const next = e.currentTarget.dataset.item
    const inputValue = parseFloat(this.data.result);

    if(this.data.value == null) {
      this.setData({
        value:inputValue
      })
    }else if(this.data.operator) {
      const currentValue = this.data.value || 0;
      const newValue = this.calculatorOperations[this.data.operator](currentValue, inputValue);
      this.setData({
        value: newValue,
        result: String(newValue)
      });
    }
    this.setData({
      isOperator: true,
      operator: next
    });
  }
})