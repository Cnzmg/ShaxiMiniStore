"use strict";
var login = getApp();
var HttpApiFollow = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/login/resGrant';
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
                            var user = JSON.stringify({
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
                                            console.log(success);
                                            wx.reLaunch({
                                                url: "/pages/assert/assert?openid=" + success.data.openids + "&user=" + user
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFbEMsSUFBTSxhQUFhLEdBQUcsZ0ZBQWdGLENBQUM7QUFFdkcsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsUUFBUSxFQUFFLHNGQUFzRjtRQUNoRyxNQUFNLEVBQUUsS0FBSztLQUNkO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVCxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBVSxNQUFNOzRCQUV2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dDQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUTtnQ0FDN0MsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7NkJBQ2hELENBQUMsQ0FBQTs0QkFFRixFQUFFLENBQUMsS0FBSyxDQUFDO2dDQUNQLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0NBQ1YsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3Q0FDVCxHQUFHLEVBQUUsYUFBYTt3Q0FDbEIsTUFBTSxFQUFFLE1BQU07d0NBQ2QsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7d0NBQ3hCLE9BQU8sRUFBRSxVQUFDLE9BQVk7NENBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7NENBQ3JCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0RBQ1YsR0FBRyxFQUFFLDhCQUE4QixHQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxJQUFJOzZDQUM1RSxDQUFDLENBQUE7d0NBQ0osQ0FBQzt3Q0FDRCxJQUFJLEVBQUU7NENBQ0osRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDWCxLQUFLLEVBQUUsTUFBTTtnREFDYixRQUFRLEVBQUUsSUFBSTs2Q0FDZixDQUFDLENBQUE7d0NBQ0osQ0FBQztxQ0FDRixDQUFDLENBQUE7Z0NBQ0osQ0FBQzs2QkFDRixDQUFDLENBQUE7d0JBRUosQ0FBQztxQkFDRixDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxNQUFNLEVBQUUsSUFBSTtxQkFDYixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGVBQWUsRUFBZixVQUFnQixNQUFXO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRO1lBQ3BELFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUztTQUN2RCxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsR0FBRyxFQUFFLGFBQWE7b0JBQ2xCLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUN4QixPQUFPLEVBQUUsVUFBQyxPQUFZO3dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNyQixFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUNWLEdBQUcsRUFBRSw4QkFBOEIsR0FBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEdBQUcsSUFBSTt5QkFDNUUsQ0FBQyxDQUFBO29CQUNKLENBQUM7b0JBQ0QsSUFBSSxFQUFFLFVBQUEsR0FBRzt3QkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUNoQixFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssRUFBRSxNQUFNOzRCQUNiLFFBQVEsRUFBRSxJQUFJO3lCQUNmLENBQUMsQ0FBQTtvQkFDSixDQUFDO2lCQUNGLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsb0JBQW9CO1NBQzFCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2dpbiA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5jb25zdCBIdHRwQXBpRm9sbG93ID0gJ2h0dHBzOi8vcG9zLmNiY29mZmVlLmNuL2FkZG9ucy9uaXVzaG9wX2IyYjJjL2NvcmUvaW5kZXgucGhwL3dhcC9sb2dpbi9yZXNHcmFudCc7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICB3eE9wZW5pZDogJ1wie1wic2Vzc2lvbl9rZXlcIjpcImxacTE3ZXkwK1NRMnNycXZLNmR6d1E9PVwiLFwib3BlbmlkXCI6XCJvelR1MjVPWVJvUF95Mms1M3ZRMDJYUjBOdHRrXCJ9XCInLFxyXG4gICAgYXNzZXJ0OiBmYWxzZSxcclxuICB9LFxyXG5cclxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEuY2FuSVVzZSlcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ewXHJcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChwYXJhbXMpIHsgIC8vIOiOt+WPlueahOeUqOaIt+S/oeaBr1xyXG5cclxuICAgICAgICAgICAgICBsZXQgdXNlciA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiBKU09OLnBhcnNlKHBhcmFtcy5yYXdEYXRhKS5uaWNrTmFtZSxcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybDogSlNPTi5wYXJzZShwYXJhbXMucmF3RGF0YSkuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBIdHRwQXBpRm9sbG93LFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjb2RlOiByZXMuY29kZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2Fzc2VydC9hc3NlcnQ/b3BlbmlkPVwiKyBzdWNjZXNzLmRhdGEub3BlbmlkcyArIFwiJnVzZXI9XCIgKyB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmnI3liqHlvILluLgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGFzc2VydDogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgYmluZEdldFVzZXJJbmZvKHBhcmFtczogYW55KSB7ICAvL+aWsOeUqOaIt+WQr+eUqOazqOWGjFxyXG4gICAgbGV0IHVzZXIgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5pY2tOYW1lOiBKU09OLnBhcnNlKHBhcmFtcy5kZXRhaWwucmF3RGF0YSkubmlja05hbWUsXHJcbiAgICAgIGF2YXRhclVybDogSlNPTi5wYXJzZShwYXJhbXMuZGV0YWlsLnJhd0RhdGEpLmF2YXRhclVybFxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiBIdHRwQXBpRm9sbG93LFxyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGRhdGE6IHsgY29kZTogcmVzLmNvZGUgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2Fzc2VydC9hc3NlcnQ/b3BlbmlkPVwiKyBzdWNjZXNzLmRhdGEub3BlbmlkcyArIFwiJnVzZXI9XCIgKyB1c2VyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5pyN5Yqh5byC5bi4JyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGNhbGxiYWNrZm4oKSB7ICAvL+WPlua2iOeZu+mZhiDov5Tlm57pppbpobVcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn0pXHJcbiJdfQ==