const login = getApp<IAppOption>()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad(options: any) {
    console.log(this.data.canIUse)
    console.log(options)
    wx.getSetting({
        success (res){
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
              }
            })
          }
        }
      })
  },

  bindGetUserInfo(params: any) {
    const HttpApiFollow = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/order/login';
    console.log(HttpApiFollow);
    console.log(params);
  }

})
