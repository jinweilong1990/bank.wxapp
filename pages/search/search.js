Page({

  data: {
    list:['大额取现','排队预约','外币取现'],
    companylist: {
      name: ['分行本部', '支行', '支行', '支行', '支行', '支行', '支行', '支行','滩支行'], 
      addr: ['大厦', '369号', '东路号', '维京大厦', '1088号', '普陀区', '行区', '海路','大连路'],
      tel: ['1518','518','1518','18','21518','76258','20858','271518','78185']},
      select:'排队预约',
  },
  onLoad: function (options) {
    var index = options.id;
    var select = this.data.list[index];
    this.setData({
      select: select 
    })
  },
  onShow: function () {
    
  },
  onReady: function () {
   
 
    
  },
  
  pickertap:function(res){
      console.log(res)
      var index=res.detail.value
      var select = this.data.list[index]
      this.setData({
        select: select
      })
  },
  teltap:function(res){
    console.log(res)
    var index = res.currentTarget.dataset.tel;
    var telnumber = this.data.companylist.tel[index]
    
    wx.makePhoneCall({
      phoneNumber: telnumber  
    })
  },
  appointtap:function(res){
    var index = res.currentTarget.dataset.bankapp;
    var currbankname = this.data.companylist.name[index];
    var select = this.data.select;
    var selectbankinfo = [select, currbankname]
    console.log(selectbankinfo)
    wx.navigateTo({
      url: '../appointment/appointment?selectbankinfo=' + selectbankinfo
    })
  }
})