"use strict";
var login = getApp();
var HttpApiFollow = 'https://m1.coffeedz.com/index.php?s=/wap/MiniDzPage/miniWx';
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
        var user = JSON.stringify({
            nickName: JSON.parse(params.detail.rawData).nickName,
            avatarUrl: JSON.parse(params.detail.rawData).avatarUrl
        });
        console.log(user);
        wx.login({
            success: function (res) {
                wx.request({
                    url: HttpApiFollow,
                    method: "POST",
                    data: { code: res.code },
                    success: function (success) {
                        console.log(success);
                        wx.reLaunch({
                            url: "/pages/assert/assert?openid=" + success.data.openids + "&user=" + user
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFbEMsSUFBTSxhQUFhLEdBQUcsNERBQTRELENBQUM7QUFFbkYsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsUUFBUSxFQUFFLHNGQUFzRjtRQUNoRyxNQUFNLEVBQUUsS0FBSztLQUNkO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVCxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBVSxNQUFNOzRCQUN2QixJQUFJLElBQUksR0FBTyxFQUFFLENBQUM7NEJBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dDQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUTtnQ0FDN0MsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7NkJBQ2hELENBQUMsQ0FBQzs0QkFDSCxFQUFFLENBQUMsS0FBSyxDQUFDO2dDQUNQLE9BQU8sRUFBRSxVQUFDLEdBQUc7b0NBQ1gsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3Q0FDVCxHQUFHLEVBQUUsYUFBYTt3Q0FDbEIsTUFBTSxFQUFFLE1BQU07d0NBQ2QsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7d0NBQ3hCLE9BQU8sRUFBRSxVQUFDLE9BQVk7NENBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs0Q0FDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3dDQU1qRSxDQUFDO3dDQUNELElBQUksRUFBRTs0Q0FDSixFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNYLEtBQUssRUFBRSxNQUFNO2dEQUNiLFFBQVEsRUFBRSxJQUFJOzZDQUNmLENBQUMsQ0FBQTt3Q0FDSixDQUFDO3FDQUNGLENBQUMsQ0FBQTtnQ0FDSixDQUFDOzZCQUNGLENBQUMsQ0FBQTt3QkFFSixDQUFDO3FCQUNGLENBQUMsQ0FBQTtpQkFDSDtxQkFBTTtvQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE1BQU0sRUFBRSxJQUFJO3FCQUNiLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZUFBZSxFQUFmLFVBQWdCLE1BQVc7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVE7WUFDcEQsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTO1NBQ3ZELENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUUsYUFBYTtvQkFDbEIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFDLE9BQVk7d0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3JCLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBQ1YsR0FBRyxFQUFFLDhCQUE4QixHQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxJQUFJO3lCQUM1RSxDQUFDLENBQUE7b0JBQ0osQ0FBQztvQkFDRCxJQUFJLEVBQUUsVUFBQSxHQUFHO3dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7d0JBQ2hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsS0FBSyxFQUFFLE1BQU07NEJBQ2IsUUFBUSxFQUFFLElBQUk7eUJBQ2YsQ0FBQyxDQUFBO29CQUNKLENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxVQUFVO1FBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxvQkFBb0I7U0FDMUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvZ2luID0gZ2V0QXBwPElBcHBPcHRpb24+KClcclxuXHJcbmNvbnN0IEh0dHBBcGlGb2xsb3cgPSAnaHR0cHM6Ly9tMS5jb2ZmZWVkei5jb20vaW5kZXgucGhwP3M9L3dhcC9NaW5pRHpQYWdlL21pbmlXeCc7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICB3eE9wZW5pZDogJ1wie1wic2Vzc2lvbl9rZXlcIjpcImxacTE3ZXkwK1NRMnNycXZLNmR6d1E9PVwiLFwib3BlbmlkXCI6XCJvelR1MjVPWVJvUF95Mms1M3ZRMDJYUjBOdHRrXCJ9XCInLFxyXG4gICAgYXNzZXJ0OiBmYWxzZSxcclxuICB9LFxyXG5cclxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEuY2FuSVVzZSlcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ewXHJcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChwYXJhbXMpIHsgIC8vIOiOt+WPlueahOeUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgIGxldCB1c2VyOmFueSA9IHt9O1xyXG4gICAgICAgICAgICAgIHVzZXJbJ3BhcmFtJ10gPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogSlNPTi5wYXJzZShwYXJhbXMucmF3RGF0YSkubmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw6IEpTT04ucGFyc2UocGFyYW1zLnJhd0RhdGEpLmF2YXRhclVybFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBIdHRwQXBpRm9sbG93LFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjb2RlOiByZXMuY29kZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJbJ25hbWUnXSA9IHN1Y2Nlc3MuZGF0YS51c2VyOyAgLy8g55So5oi35ZCN5a2Y5YKoXHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyWyd0b2tlbiddID0gc3VjY2Vzcy5kYXRhLnRva2VuID8gc3VjY2Vzcy5kYXRhLnRva2VuIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIHVybDogXCIvcGFnZXMvYXNzZXJ0L2Fzc2VydD90b2tlbj1cIiArIEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pyN5Yqh5byC5bi4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgICAgICBhc3NlcnQ6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGJpbmRHZXRVc2VySW5mbyhwYXJhbXM6IGFueSkgeyAgLy/mlrDnlKjmiLflkK/nlKjms6jlhoxcclxuICAgIGxldCB1c2VyID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBuaWNrTmFtZTogSlNPTi5wYXJzZShwYXJhbXMuZGV0YWlsLnJhd0RhdGEpLm5pY2tOYW1lLFxyXG4gICAgICBhdmF0YXJVcmw6IEpTT04ucGFyc2UocGFyYW1zLmRldGFpbC5yYXdEYXRhKS5hdmF0YXJVcmxcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogSHR0cEFwaUZvbGxvdyxcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBkYXRhOiB7IGNvZGU6IHJlcy5jb2RlIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiAoc3VjY2VzczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgdXJsOiBcIi9wYWdlcy9hc3NlcnQvYXNzZXJ0P29wZW5pZD1cIisgc3VjY2Vzcy5kYXRhLm9wZW5pZHMgKyBcIiZ1c2VyPVwiICsgdXNlclxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+acjeWKoeW8guW4uCcsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBjYWxsYmFja2ZuKCkgeyAgLy/lj5bmtojnmbvpmYYg6L+U5Zue6aaW6aG1XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59KVxyXG4iXX0=