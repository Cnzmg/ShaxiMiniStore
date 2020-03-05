const pay = getApp<IAppOption>()

Page({
  data: {

  },

  onLoad(options: any) {
    const HttpApiFollow = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/order/login';
    const HttpApiFollowCall = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/pay/wchatpayresult';
    // const HttpApiFollow = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/order/tests';
    console.log(options)
    wx.login({
      success: res => {
        wx.request({
          url: HttpApiFollow,
          method: "POST",
          data: {code: res.code, money: options.money},
          success: (success: any) => {
              wx.requestPayment({
                timeStamp: success.data.timeStamp,
                nonceStr: success.data.nonceStr,
                package: success.data.package,
                signType: success.data.signType,
                paySign: success.data.paySign,
                success: (res) => {
                    if (res.errMsg == 'requestPayment:ok') {
                        wx.request({
                          url: HttpApiFollowCall +`/?msg=1&out_trade_no=${ options.orderId }`,
                          method: "GET",
                          data: {},
                          success: () => {
                            wx.reLaunch({
                              url: '/pages/order/order'
                            })
                          },
                          fail: err => {
                              console.log(err)
                          }
                      })

                    } else {
                        wx.showToast({
                            title: '支付失败',
                            icon: 'none',
                            duration: 2000
                        })
                    }
                },
                fail: () => {
                    wx.reLaunch({
                      url: '/pages/order/order'
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
