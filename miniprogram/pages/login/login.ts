const login = getApp<IAppOption>()

const HttpApiFollow = 'https://m1.coffeedz.com/index.php?s=/wap/minipage/miniWx';

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
              let user:any = {};
              user['param'] = JSON.stringify({
                nickName: JSON.parse(params.rawData).nickName,
                avatarUrl: JSON.parse(params.rawData).avatarUrl
              });
              wx.login({
                success: (res) => {
                  wx.request({
                    url: HttpApiFollow,
                    method: "POST",
                    data: { code: res.code },
                    success: (success: any) => {
                      user['name'] = success.data.user;  // 用户名存储
                      user['token'] = success.data.token ? success.data.token : null;
                      wx.reLaunch({
                        url: "/pages/assert/assert?token=" + JSON.stringify(user)
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
    console.log(params);
    
    let user:any = {};
        user['param'] = JSON.stringify({
          nickName: JSON.parse(params.rawData).nickName,
          avatarUrl: JSON.parse(params.rawData).avatarUrl
        });
    wx.login({
      success: res => {
        wx.request({
          url: HttpApiFollow,
          method: "POST",
          data: { code: res.code },
          success: (success: any) => {
            user['name'] = success.data.user;  // 用户名存储
            user['token'] = success.data.token ? success.data.token : null;
            wx.reLaunch({
              url: "/pages/assert/assert?token=" + JSON.stringify(user)
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
