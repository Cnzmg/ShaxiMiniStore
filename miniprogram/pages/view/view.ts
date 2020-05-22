const view = getApp<IAppOption>()

Page({
  data: {
      product: ''
  },

  onLoad(options: any) {
      this.setData({
          product: options.product || '？'
      })
  },

  onShareAppMessage() {
    return {
      title: ' ',
      path: '/pages/index/index'
    }
  },

  onHide: function() {
    // 页面从前台变为后台时执行
    wx.login({
      success: res => {
        wx.request({
          url: 'https://m1.coffeedz.com/index.php?s=/wap/minipage/checkSignature',
          data: { code: res.code, product: this.data.product},
          method: 'POST',
          success:function(params: any) {
            console.info(params);
            // wx.showToast({
            //   title: JSON.stringify(params.data),
            //   icon: 'none',
            //   duration: 20000
            // })
          }
        })
      }
    })
  },

})
