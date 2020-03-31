"use strict";
var login = getApp();
var HttpApiFollow = 'https://m1.coffeedz.com/index.php?s=/wap/minipage/miniWx';
Page({
    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        wxOpenid: '"{"session_key":"lZq17ey0+SQ2srqvK6dzwQ==","openid":"ozTu25OYRoP_y2k53vQ02XR0Nttk"}"',
        assert: false,
    },
    onLoad: function (options) {
        console.log(options);
        var that = this;
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (params) {
                            var user = {};
                            user['param'] = JSON.stringify({
                                nickName: JSON.parse(params.rawData).nickName,
                                avatarUrl: JSON.parse(params.rawData).avatarUrl
                            });
                            wx.login({
                                success: function (res) {
                                    wx.request({
                                        url: HttpApiFollow,
                                        method: "POST",
                                        data: { code: res.code },
                                        success: function (success) {
                                            user['name'] = success.data.user;
                                            user['token'] = success.data.token ? success.data.token : null;
                                            wx.reLaunch({
                                                url: "/pages/assert/assert?token=" + JSON.stringify(user)
                                            });
                                        },
                                        fail: function () {
                                            wx.showToast({
                                                title: '服务异常',
                                                duration: 2000
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
                else {
                    that.setData({
                        assert: true
                    });
                }
            }
        });
    },
    bindGetUserInfo: function (params) {
        if (params.detail.errMsg == "getUserInfo:fail auth deny")
            return;
        var user = {};
        user['param'] = JSON.stringify({
            nickName: JSON.parse(params.detail.rawData).nickName,
            avatarUrl: JSON.parse(params.detail.rawData).avatarUrl
        });
        wx.login({
            success: function (res) {
                wx.request({
                    url: HttpApiFollow,
                    method: "POST",
                    data: { code: res.code },
                    success: function (success) {
                        user['name'] = success.data.user;
                        user['token'] = success.data.token ? success.data.token : null;
                        wx.reLaunch({
                            url: "/pages/assert/assert?token=" + JSON.stringify(user)
                        });
                    },
                    fail: function (err) {
                        console.log(err);
                        wx.showToast({
                            title: '服务异常',
                            duration: 2000
                        });
                    }
                });
            },
        });
    },
    callbackfn: function () {
        wx.navigateTo({
            url: '/pages/index/index'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFbEMsSUFBTSxhQUFhLEdBQUcsMERBQTBELENBQUM7QUFFakYsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsUUFBUSxFQUFFLHNGQUFzRjtRQUNoRyxNQUFNLEVBQUUsS0FBSztLQUNkO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVCxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBVSxNQUFNOzRCQUN2QixJQUFJLElBQUksR0FBUSxFQUFFLENBQUM7NEJBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dDQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUTtnQ0FDN0MsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7NkJBQ2hELENBQUMsQ0FBQzs0QkFDSCxFQUFFLENBQUMsS0FBSyxDQUFDO2dDQUNQLE9BQU8sRUFBRSxVQUFDLEdBQUc7b0NBQ1gsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3Q0FDVCxHQUFHLEVBQUUsYUFBYTt3Q0FDbEIsTUFBTSxFQUFFLE1BQU07d0NBQ2Qs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LENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2dpbiA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5jb25zdCBIdHRwQXBpRm9sbG93ID0gJ2h0dHBzOi8vbTEuY29mZmVlZHouY29tL2luZGV4LnBocD9zPS93YXAvbWluaXBhZ2UvbWluaVd4JztcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuICAgIHd4T3BlbmlkOiAnXCJ7XCJzZXNzaW9uX2tleVwiOlwibFpxMTdleTArU1Eyc3Jxdks2ZHp3UT09XCIsXCJvcGVuaWRcIjpcIm96VHUyNU9ZUm9QX3kyazUzdlEwMlhSME50dGtcIn1cIicsXHJcbiAgICBhc3NlcnQ6IGZhbHNlLFxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5jYW5JVXNlKVxyXG4gICAgY29uc29sZS5sb2cob3B0aW9ucylcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcclxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHBhcmFtcykgeyAgLy8g6I635Y+W55qE55So5oi35L+h5oGvXHJcbiAgICAgICAgICAgICAgbGV0IHVzZXI6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICAgIHVzZXJbJ3BhcmFtJ10gPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogSlNPTi5wYXJzZShwYXJhbXMucmF3RGF0YSkubmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IEpTT04ucGFyc2UocGFyYW1zLnJhd0RhdGEpLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBIdHRwQXBpRm9sbG93LFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjb2RlOiByZXMuY29kZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJbJ25hbWUnXSA9IHN1Y2Nlc3MuZGF0YS51c2VyOyAgLy8g55So5oi35ZCN5a2Y5YKoXHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyWyd0b2tlbiddID0gc3VjY2Vzcy5kYXRhLnRva2VuID8gc3VjY2Vzcy5kYXRhLnRva2VuIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9hc3NlcnQvYXNzZXJ0P3Rva2VuPVwiICsgSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+acjeWKoeW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgYXNzZXJ0OiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBiaW5kR2V0VXNlckluZm8ocGFyYW1zOiBhbnkpIHsgIC8v5paw55So5oi35ZCv55So5rOo5YaMXHJcbiAgICBpZiAocGFyYW1zLmRldGFpbC5lcnJNc2cgPT0gXCJnZXRVc2VySW5mbzpmYWlsIGF1dGggZGVueVwiKSByZXR1cm47XHJcbiAgICBsZXQgdXNlcjogYW55ID0ge307XHJcbiAgICB1c2VyWydwYXJhbSddID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuaWNrTmFtZTogSlNPTi5wYXJzZShwYXJhbXMuZGV0YWlsLnJhd0RhdGEpLm5pY2tOYW1lLFxyXG4gICAgICBhdmF0YXJVcmw6IEpTT04ucGFyc2UocGFyYW1zLmRldGFpbC5yYXdEYXRhKS5hdmF0YXJVcmxcclxuICAgIH0pO1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiBIdHRwQXBpRm9sbG93LFxyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGRhdGE6IHsgY29kZTogcmVzLmNvZGUgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdXNlclsnbmFtZSddID0gc3VjY2Vzcy5kYXRhLnVzZXI7ICAvLyDnlKjmiLflkI3lrZjlgqhcclxuICAgICAgICAgICAgdXNlclsndG9rZW4nXSA9IHN1Y2Nlc3MuZGF0YS50b2tlbiA/IHN1Y2Nlc3MuZGF0YS50b2tlbiA6IG51bGw7XHJcbiAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2Fzc2VydC9hc3NlcnQ/dG9rZW49XCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+acjeWKoeW8guW4uCcsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBjYWxsYmFja2ZuKCkgeyAgLy/lj5bmtojnmbvpmYYg6L+U5Zue6aaW6aG1XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59KVxyXG4iXX0=