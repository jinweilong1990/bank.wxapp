var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    certificates:[
      '身份证',
      '护照',
      '外国人居留证',
      '港澳居民往来内地身份证',
      '台湾居民往来大陆通行证',
      ],
      index:0,
      showconf:false,
      monthinfo:null,
      dayinfo:null,
      timeinfo:null,
      selectbankinfo:[],
      username:'',
      userphone:null,
      usercertificate:null,
      selectcerttype:'身份证',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      selectbankinfo:options.selectbankinfo
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
    if (app.appointinfo.appmonth & app.appointinfo.apptime != null) {
      this.data.showconf = true;
      this.data.monthinfo = app.appointinfo.appmonth;
      this.data.dayinfo = app.appointinfo.appday;
      this.data.timeinfo = app.appointinfo.apptime;
      this.setData({
        monthinfo: this.data.monthinfo,
        dayinfo: this.data.dayinfo,
        timeinfo: this.data.timeinfo,
        showconf:this.data.showconf
      })
    };
    
  },
  choosetime: function () {
    wx.navigateTo({
      url: '../select/select',
    });
  },
  inputname:function(res){
    console.log('name',res)
     this.setData({
        username:res.detail.value
     })
  },
  inputcertificate:function(res){
    this.setData({
      usercertificate:res.detail.value
    })
  },
  inputuserphone:function(res){
    this.setData({
      userphone:res.detail.value
    })
  },
  bindPickerChange:function(event){
    var index= event.detail.value
    var certtype=this.data.certificates[index]
    this.setData({
        selectcerttype:certtype
    })

  },
  submittap:function(){
    var subdate = new Date();
    var subtimeinfo = [subdate.getFullYear(), subdate.getMonth() + 1, subdate.getDate(), subdate.getHours(), subdate.getMinutes()];
    if (this.data.username != null & this.data.userphone != null & this.data.usercertificate != null & this.data.timeinfo != null){
        app.appointinfo.appselectbankinfo = this.data.selectbankinfo,
        app.appointinfo.username = this.data.username,
        app.appointinfo.userphone = this.data.userphone,
        app.appointinfo.usercertificate = this.data.usercertificate,
        app.appointinfo.selectcerttype = this.data.selectcerttype,
        app.appointinfo.appselectbankinfo = this.data.selectbankinfo,
        app.appointinfo.subtimeinfo = subtimeinfo
    }else{
      wx.showModal({
        title: '提示',
        content: '必填信息不能为空',
        showCancel:false
        
      })
    }
    
  }
  
})