//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    bg_icon:'../picture/icon1.jpg',
    userInfo:{},
    service_icon1:'../picture/service1.png',
    service_icon2:'../picture/service2.png',
    service_icon3:'../picture/service3.png'
  },
  onLoad:function(){
    var that = this
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  //事件处理函数
  bankmap: function() {
    wx.navigateTo({
      url: '../search/search?id=1'
    })
  },
  bankmap1: function () {
    wx.navigateTo({
      url: '../search/search?id=2'
    })
  },
  bankmap2: function () {
    wx.navigateTo({
      url: '../search/search?id=0'
    })
  },
  appinfo:function(){
    wx.navigateTo({
      url: '../haveapp/haveapp?id=0'
    })
  }
})
