const order = getApp<IAppOption>()

Page({
  data: {
    url: ""
  },

  onLoad() {
    this.setData({
        url: `https://m1.coffeedz.com/index.php?s=/wap/order/lists`
    })
  },

  onShareAppMessage() {
    return {
      title: '我的商城',
      path: '/pages/index/index'
    }
  }

})
