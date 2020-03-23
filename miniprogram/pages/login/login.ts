const login = getApp<IAppOption>()

const HttpApiFollow = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/login/testlogin';
const regest = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/login/testadd';

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wxOpenid: '"{"session_key":"lZq17ey0+SQ2srqvK6dzwQ==","openid":"ozTu25OYRoP_y2k53vQ02XR0Nttk"}"',
    assert: false
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
            success: function (res) {
              console.log(res);
              wx.login({
                success: res => {
                  wx.request({
                    url: HttpApiFollow,
                    method: "POST",
                    data: { code: res.code },
                    success: (success: any) => {
                      console.log(success);
                      console.log(JSON.parse(success.data).openid);
                    },
                    fail: err => {
                      console.log(err)
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
    wx.login({
      success: res => {
        wx.request({
          url: HttpApiFollow,
          method: "POST",
          data: { code: res.code },
          success: (success: any) => {
            console.log(success);

            wx.request({
              url: regest,
              method: "POST",
              data: {},
              success: (success: any) => {
                console.log(success);

              },
              fail: err => {
                console.log(err)
              }
            })

          },
          fail: err => {
            console.log(err)
          }
        })
      },
    })
    console.log(HttpApiFollow);
    console.log(params);
  },

  callbackfn() {  //取消登陆 返回首页
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }

})
