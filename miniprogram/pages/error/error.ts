const error = getApp<IAppOption>()

Page({
  data: {
      message: ''
  },

  onLoad(options: any) {
    console.log(options);
    this.setData({
        message: "出错了哦"
    })
  },

  callbackfn() {  //取消登陆 返回首页
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }

})
