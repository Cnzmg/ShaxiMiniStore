const login = getApp<IAppOption>()

const HttpApiFollow = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/login/resGrant';

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wxOpenid: '"{"session_key":"lZq17ey0+SQ2srqvK6dzwQ==","openid":"ozTu25OYRoP_y2k53vQ02XR0Nttk"}"',
    assert: false,
  },

  onLoad(options: any) {
    // console.log(this.data.canIUse)
    console.log(options)
    let that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (params) {  // 获取的用户信息

              let user = JSON.stringify({
                nickName: JSON.parse(params.rawData).nickName,
                avatarUrl: JSON.parse(params.rawData).avatarUrl
              })

              wx.login({
                success: res => {
                  wx.request({
                    url: HttpApiFollow,
                    method: "POST",
                    data: { code: res.code },
                    success: (success: any) => {
                      console.log(success);
                      wx.reLaunch({
                        url: "/pages/assert/assert?openid="+ success.data.openids + "&user=" + user
                      })
                    },
                    fail: () => {
                      wx.showToast({
                        title: '服务异常',
                        duration: 2000
                      })
                    }
                  })
                }
              })

            }
          })
        } else {
          that.setData({
            assert: true
          })
        }
      }
    })
  },

  bindGetUserInfo(params: any) {  //新用户启用注册
    let user = JSON.stringify({
      nickName: JSON.parse(params.detail.rawData).nickName,
      avatarUrl: JSON.parse(params.detail.rawData).avatarUrl
    })
    console.log(user);
    wx.login({
      success: res => {
        wx.request({
          url: HttpApiFollow,
          method: "POST",
          data: { code: res.code },
          success: (success: any) => {
            console.log(success);
            wx.reLaunch({
              url: "/pages/assert/assert?openid="+ success.data.openids + "&user=" + user
            })
          },
          fail: err => {
            console.log(err)
            wx.showToast({
              title: '服务异常',
              duration: 2000
            })
          }
        })
      },
    })
  },

  callbackfn() {  //取消登陆 返回首页
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }

})
