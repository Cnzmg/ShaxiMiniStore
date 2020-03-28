const user = getApp<IAppOption>()

Page({
  data: {
    url: "",
  },

  onLoad(options: any) {
    console.log(options);
    this.setData({
        url: "https://m1.coffeedz.com/index.php?s=/wap/member/index"
    })

  },

  callbackfn() {  //取消登陆 返回首页
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }

})
