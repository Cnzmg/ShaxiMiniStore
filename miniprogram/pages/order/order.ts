const order = getApp<IAppOption>()

Page({
  data: {
    url: ""
  },

  onLoad() {
    this.setData({
        url: `https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/order/myorderlist?shop_id=0`
    })
  },

  onShareAppMessage() {
    return {
      title: '我的商城',
      path: '/pages/index/index'
    }
  }

})
