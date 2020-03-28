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
        console.log(params);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFbEMsSUFBTSxhQUFhLEdBQUcsMERBQTBELENBQUM7QUFFakYsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsUUFBUSxFQUFFLHNGQUFzRjtRQUNoRyxNQUFNLEVBQUUsS0FBSztLQUNkO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVCxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBVSxNQUFNOzRCQUN2QixJQUFJLElBQUksR0FBTyxFQUFFLENBQUM7NEJBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dDQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUTtnQ0FDN0MsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7NkJBQ2hELENBQUMsQ0FBQzs0QkFDSCxFQUFFLENBQUMsS0FBSyxDQUFDO2dDQUNQLE9BQU8sRUFBRSxVQUFDLEdBQUc7b0NBQ1gsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3Q0FDVCxHQUFHLEVBQUUsYUFBYTt3Q0FDbEIsTUFBTSxFQUFFLE1BQU07d0NBQ2Qs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PSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxyXG5cclxuY29uc3QgSHR0cEFwaUZvbGxvdyA9ICdodHRwczovL20xLmNvZmZlZWR6LmNvbS9pbmRleC5waHA/cz0vd2FwL21pbmlwYWdlL21pbmlXeCc7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICB3eE9wZW5pZDogJ1wie1wic2Vzc2lvbl9rZXlcIjpcImxacTE3ZXkwK1NRMnNycXZLNmR6d1E9PVwiLFwib3BlbmlkXCI6XCJvelR1MjVPWVJvUF95Mms1M3ZRMDJYUjBOdHRrXCJ9XCInLFxyXG4gICAgYXNzZXJ0OiBmYWxzZSxcclxuICB9LFxyXG5cclxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEuY2FuSVVzZSlcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ewXHJcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChwYXJhbXMpIHsgIC8vIOiOt+WPlueahOeUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgIGxldCB1c2VyOmFueSA9IHt9O1xyXG4gICAgICAgICAgICAgIHVzZXJbJ3BhcmFtJ10gPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogSlNPTi5wYXJzZShwYXJhbXMucmF3RGF0YSkubmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IEpTT04ucGFyc2UocGFyYW1zLnJhd0RhdGEpLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBIdHRwQXBpRm9sbG93LFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjb2RlOiByZXMuY29kZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJbJ25hbWUnXSA9IHN1Y2Nlc3MuZGF0YS51c2VyOyAgLy8g55So5oi35ZCN5a2Y5YKoXHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyWyd0b2tlbiddID0gc3VjY2Vzcy5kYXRhLnRva2VuID8gc3VjY2Vzcy5kYXRhLnRva2VuIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9hc3NlcnQvYXNzZXJ0P3Rva2VuPVwiICsgSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+acjeWKoeW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgYXNzZXJ0OiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBiaW5kR2V0VXNlckluZm8ocGFyYW1zOiBhbnkpIHsgIC8v5paw55So5oi35ZCv55So5rOo5YaMXHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gICAgXHJcbiAgICBsZXQgdXNlcjphbnkgPSB7fTtcclxuICAgICAgICB1c2VyWydwYXJhbSddID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgbmlja05hbWU6IEpTT04ucGFyc2UocGFyYW1zLnJhd0RhdGEpLm5pY2tOYW1lLFxyXG4gICAgICAgICAgYXZhdGFyVXJsOiBKU09OLnBhcnNlKHBhcmFtcy5yYXdEYXRhKS5hdmF0YXJVcmxcclxuICAgICAgICB9KTtcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogSHR0cEFwaUZvbGxvdyxcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBkYXRhOiB7IGNvZGU6IHJlcy5jb2RlIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiAoc3VjY2VzczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJbJ25hbWUnXSA9IHN1Y2Nlc3MuZGF0YS51c2VyOyAgLy8g55So5oi35ZCN5a2Y5YKoXHJcbiAgICAgICAgICAgIHVzZXJbJ3Rva2VuJ10gPSBzdWNjZXNzLmRhdGEudG9rZW4gPyBzdWNjZXNzLmRhdGEudG9rZW4gOiBudWxsO1xyXG4gICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9hc3NlcnQvYXNzZXJ0P3Rva2VuPVwiICsgSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmnI3liqHlvILluLgnLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgY2FsbGJhY2tmbigpIHsgIC8v5Y+W5raI55m76ZmGIOi/lOWbnummlumhtVxyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufSlcclxuIl19