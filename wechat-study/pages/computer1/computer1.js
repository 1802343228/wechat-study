// pages/computer1/computer1.js
//获取应用实例
const app = getApp()

Page({
  data: {
    calculation:"",
    result:0,
    character:[],  // 运算符号
    operand: [],    // 数字
    temp:false
  },

  // 输入框输入数据
  addBtn:function(e) {
    let input = e.currentTarget.dataset.text;
    var that = this;
    if (input == '+' || input == '-' || input == '*' || input == '/') {
      this.data.temp = false; // 用于记录上一次是否是操作符
      var item = 'character[' + this.data.character.length+ ']';
      this.setData({
        [item] :input
      }) 
    } else {
      var item = 'operand['+this.data.operand.length+']';
     
      if(that.data.temp) {
        // 拿到前一个的值
        var res = 'operand[' + (this.data.operand.length-1) + ']'
        
        var ress= that.data.operand.length-1;
        var xyz = that.data.operand[ress] * 10 + parseInt(input);
        that.setData({
          [res]:xyz
        })
      } else {
        input = parseInt(input);
        that.data.temp = true;
        that.setData({
          [item]: input
        })
      }
    }
    // 将所有的内容放到显示框中
    this.setData({
      calculation:this.data.calculation+input
    })

  },

  // 计算答案
  resBtn:function() {
    var character_len =  this.data.character.length ;
    var operand_len = this.data.operand.length;
    console.log(operand_len - character_len)
    if(operand_len - character_len == 1) {
      this.data.result = this.data.operand[0];
      console.log("初始值"+this.data.result);
      for(var i=0;i<character_len;i++) {
        if(this.data.character[i] == '+') {
          this.data.result = this.data.result + this.data.operand[i + 1];

        }
        if (this.data.character[i] == '-') {
          this.data.result = this.data.result - this.data.operand[i + 1];

        }
        if (this.data.character[i] == '*') {
          this.data.result = this.data.result * this.data.operand[i + 1];

        }
        if (this.data.character[i] == '/') {
          this.data.result = this.data.result / this.data.operand[i + 1];

        }
        
      }
    } else {
      this.setData({
        result:'输入有误，清空数据，重新输入'
      })
    }

    this.setData({
     calculation:this.data.result
    })
  },

  // 清空屏幕
  emptyBtn:function() {
    this.setData({
      calculation: "",
      result: 0,
      character: [],  // 运算符号
      operand: [],    // 数字
      temp: false
    })
  }
})

