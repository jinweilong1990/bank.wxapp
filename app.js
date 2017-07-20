//app.js
App({
  onLaunch: function() {
    
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  },
  appointinfo:{
    appselectbankinfo:null,
    appmonth:null,
    apptime:null,
    appday:null,
    username: '',
    userpohone: '',
    usercertificate: '',
    selectcerttype: '',
    subtimeinfo:''
  },
  cityhistory:{
    history:[],
    positioncity:'全国',
  }
})
