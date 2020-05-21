const openmini = getApp<IAppOption>()

Page({
  data: {
      appid: 'wx0c15f458bcbbc11d',
      product: ''
  },

  onLoad(options: any) {
      console.log(options);
      this.setData({
          appid: options.appid,
          product: '这是什么产品哦'
      })
  },

  bindViewTap(){
    wx.navigateToMiniProgram({
        appId: this.data.appid,
        path: 'pages/index/index',
        extraData: {
          foo: 'bar'
        },
        envVersion: 'develop',
        success(res) {
          console.log(res)
        },
        fail(err){
            wx.showToast({
                title: err.errMsg,
                icon: 'none'
            })
        }
      })
  },

  onShareAppMessage() {
    return {
      title: ' ',
      path: '/pages/index/index'
    }
  },

  handleContact (e: any) {
    console.log(e.detail.path)
    console.log(e.detail.query)
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
            wx.showToast({
              title: JSON.stringify(params.data),
              icon: 'none',
              duration: 20000
            })
          }
        })
      }
    })
  },

})
