var app = getApp();
var MyDate = new Date();
var weekch='';
var weekchinese= function(x){
  switch (x) {
    case 0:
      weekch = "周日";
      return weekch;
      break;
    case 1:
      weekch = "周一";
      return weekch;
      break;
    case 2:
      weekch = "周二";
      return weekch;
      break;
    case 3:
      weekch = "周三";
      return weekch;
      break;
    case 4:
      weekch = "周四";
      return weekch;
      break;
    case 5:
      weekch = "周五";
      return weekch;
      break;
    case 6:
      weekch = "周六";
      return weekch;
      break;
  }
};
var daysum = function(year,month){
  var d = new Date(year,month,0);
  return d.getDate();
} 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: ['09', 10, 11, 12, 13, 14, 15, 16, 17, 18],
    peoplenum: ['1', '5', '7', '10', '1', '2', '3', '10', '11'],
    select: true,
    weeks:["今天","明天"],
    days:[],
    id:0,
    months:[],
  
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var weeknum = MyDate.getDay()+2;
      var day = MyDate.getDate(); 
      var month = MyDate.getMonth()+1;
      var daycount = daysum(MyDate.getFullYear(),MyDate.getMonth()+1)
      var that=this
      for (var i = 2; i <= 6; i++) {
          if (weeknum > 6) {
            var weeknum = weeknum -7;
            var weekch = weekchinese(weeknum);
            var weeknum = weeknum + 1;
            this.data.weeks[i] = weekch;
          }
          else if (weeknum ==6){
            var weekch = weekchinese(weeknum);
            this.data.weeks[i] = weekch;
            var weeknum = 0
            var weeknum = weeknum + 1;
          }
          else{
            var weekch = weekchinese(weeknum);
            var weeknum = weeknum + 1;
            this.data.weeks[i] = weekch;
          }
          
      };
        
        for(i=0;i<=6;i++){
          if(day <= daycount){
            this.data.days[i] = day;
            this.data.months[i] = month;
            var day = day + 1;
          }
          else
          {
            var month = month+1 ;
            this.data.months[i] = month;
            var day = 1;
            this.data.days[i] = day;
          }
        };
          this.setData({
            weeks: this.data.weeks,
            months:this.data.months,
            days:this.data.days
          }); 
          
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    app.appointinfo.appmonth = this.data.months[0];
    app.appointinfo.appday = this.data.days[0];
    
  },

  swichNav: function (e) {

        var that = this;
        
        if (this.data.id !=e.target.id) {
          this.setData({
            id: e.target.id 
          })
        };
       
        if (this.data.id == 0) {
          app.appointinfo.appmonth = this.data.months[0];
          app.appointinfo.appday = this.data.days[0];
          
        }
        else if (this.data.id == 1) {
          app.appointinfo.appmonth = this.data.months[1];
          app.appointinfo.appday = this.data.days[1];
          
        }
        else if (this.data.id == 2) {
          app.appointinfo.appmonth = this.data.months[2];
          app.appointinfo.appday = this.data.days[2];
          
        }
        else if (this.data.id == 3) {
          app.appointinfo.appmonth = this.data.months[3];
          app.appointinfo.appday = this.data.days[3];
          
        }
        else if (this.data.id == 4) {
          app.appointinfo.appmonth = this.data.months[4];
          app.appointinfo.appday = this.data.days[4];
          
        }
        else if (this.data.id == 5) {
          app.appointinfo.appmonth = this.data.months[5];
          app.appointinfo.appday = this.data.days[5];
          
        }
        else if (this.data.id == 6) {
          app.appointinfo.appmonth = this.data.months[6];
          app.appointinfo.appday = this.data.days[6];
          
        }
        else {

        };
      },
      tapselect:function(e){  
        app.appointinfo.apptime=e.currentTarget.dataset.time
        console.log(app.appointinfo.apptime)
        wx.navigateBack({
          delta: 1
        })
       }
})