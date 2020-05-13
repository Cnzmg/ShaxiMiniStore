const openmini = getApp<IAppOption>()

Page({
  data: {
      appid: 'wx0c15f458bcbbc11d'
  },

  onLoad(options: any) {
      console.log(options);
      this.setData({
          appid: options.appid
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
  }

})
