const pay = getApp<IAppOption>()

Page({
  data: {

  },

  onLoad(options: any) {
    const HttpApiFollow = 'https://m1.coffeedz.com/index.php?s=/wap/minipage/pay';
    const HttpApiFollowCall = 'https://m1.coffeedz.com/index.php?s=/wap/minipage/wchatpayresult';
    console.log(options)
    wx.login({
      success: res => {
        wx.request({
          url: HttpApiFollow,
          method: "POST",
          data: { code: res.code, orderId: options.orderId },
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
                    url: HttpApiFollowCall + `&orderId=${options.orderId}`,
                    method: "GET",
                    data: {},
                    success: () => {
                      wx.reLaunch({
                        url: '/pages/order/order'
                      })
                      // if (res) {
                      //   wx.reLaunch({
                      //     url: '/pages/order/order'
                      //   })
                      // } else {
                      //   wx.showToast({
                      //     title: '支付失败',
                      //     icon: 'none',
                      //     duration: 2000
                      //   })
                      // }
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
