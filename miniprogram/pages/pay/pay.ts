const pay = getApp<IAppOption>()

Page({
  data: {

  },

  onLoad() {
    const HttpApiFollow = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/order/login';
    // const HttpApiFollow = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/order/tests';
    wx.login({
      success: res => {
        wx.request({
          url: HttpApiFollow,
          method: "POST",
          data: {code: res.code},
          success: (success: any) => {
              wx.requestPayment({
                timeStamp: success.data.timeStamp,
                nonceStr: success.data.nonceStr,
                package: success.data.package,
                signType: success.data.signType,
                paySign: success.data.paySign,
                success: (res) => {
                    if (res.errMsg == 'requestPayment:ok') {
                        console.log(`success`)
                    } else {
                        wx.showToast({
                            title: '支付失败',
                            icon: 'none',
                            duration: 2000
                        })
                    }
                },
                fail: () => {
                    wx.navigateBack({  //取消支付 返回上一层
                        delta: 1
                    })
                }
            })
          },
          fail: err => {
              console.log(err)
          }
      })
      },
    })
    
  },

  onShareAppMessage() {
    return {
      title: '我的商城',
      path: '/pages/index/index'
    }
  }

})
