"use strict";
var login = getApp();
var HttpApiFollow = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/login/testlogin';
var regest = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/login/testadd';
Page({
    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        wxOpenid: '"{"session_key":"lZq17ey0+SQ2srqvK6dzwQ==","openid":"ozTu25OYRoP_y2k53vQ02XR0Nttk"}"',
        assert: false
    },
    onLoad: function (options) {
        console.log(options);
        var that = this;
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            console.log(res);
                            wx.login({
                                success: function (res) {
                                    wx.request({
                                        url: HttpApiFollow,
                                        method: "POST",
                                        data: { code: res.code },
                                        success: function (success) {
                                            console.log(success);
                                            console.log(JSON.parse(success.data).openid);
                                        },
                                        fail: function (err) {
                                            console.log(err);
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
        wx.login({
            success: function (res) {
                wx.request({
                    url: HttpApiFollow,
                    method: "POST",
                    data: { code: res.code },
                    success: function (success) {
                        console.log(success);
                        wx.request({
                            url: regest,
                            method: "POST",
                            data: {},
                            success: function (success) {
                                console.log(success);
                            },
                            fail: function (err) {
                                console.log(err);
                            }
                        });
                    },
                    fail: function (err) {
                        console.log(err);
                    }
                });
            },
        });
        console.log(HttpApiFollow);
        console.log(params);
    },
    callbackfn: function () {
        wx.navigateTo({
            url: '/pages/index/index'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFbEMsSUFBTSxhQUFhLEdBQUcsaUZBQWlGLENBQUM7QUFDeEcsSUFBTSxNQUFNLEdBQUcsK0VBQStFLENBQUM7QUFFL0YsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsUUFBUSxFQUFFLHNGQUFzRjtRQUNoRyxNQUFNLEVBQUUsS0FBSztLQUNkO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVCxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBVSxHQUFHOzRCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNqQixFQUFFLENBQUMsS0FBSyxDQUFDO2dDQUNQLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0NBQ1YsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3Q0FDVCxHQUFHLEVBQUUsYUFBYTt3Q0FDbEIsTUFBTSxFQUFFLE1BQU07d0NBQ2QsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7d0NBQ3hCLE9BQU8sRUFBRSxVQUFDLE9BQVk7NENBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7NENBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7d0NBQy9DLENBQUM7d0NBQ0QsSUFBSSxFQUFFLFVBQUEsR0FBRzs0Q0FDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dDQUNsQixDQUFDO3FDQUNGLENBQUMsQ0FBQTtnQ0FDSixDQUFDOzZCQUNGLENBQUMsQ0FBQTt3QkFFSixDQUFDO3FCQUNGLENBQUMsQ0FBQTtpQkFDSDtxQkFBTTtvQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE1BQU0sRUFBRSxJQUFJO3FCQUNiLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZUFBZSxFQUFmLFVBQWdCLE1BQVc7UUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUUsYUFBYTtvQkFDbEIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFDLE9BQVk7d0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBRXJCLEVBQUUsQ0FBQyxPQUFPLENBQUM7NEJBQ1QsR0FBRyxFQUFFLE1BQU07NEJBQ1gsTUFBTSxFQUFFLE1BQU07NEJBQ2QsSUFBSSxFQUFFLEVBQUU7NEJBQ1IsT0FBTyxFQUFFLFVBQUMsT0FBWTtnQ0FDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFFdkIsQ0FBQzs0QkFDRCxJQUFJLEVBQUUsVUFBQSxHQUFHO2dDQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7NEJBQ2xCLENBQUM7eUJBQ0YsQ0FBQyxDQUFBO29CQUVKLENBQUM7b0JBQ0QsSUFBSSxFQUFFLFVBQUEsR0FBRzt3QkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNsQixDQUFDO2lCQUNGLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELFVBQVU7UUFDUixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9CQUFvQjtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9naW4gPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxyXG5cclxuY29uc3QgSHR0cEFwaUZvbGxvdyA9ICdodHRwczovL3Bvcy5jYmNvZmZlZS5jbi9hZGRvbnMvbml1c2hvcF9iMmIyYy9jb3JlL2luZGV4LnBocC93YXAvbG9naW4vdGVzdGxvZ2luJztcclxuY29uc3QgcmVnZXN0ID0gJ2h0dHBzOi8vcG9zLmNiY29mZmVlLmNuL2FkZG9ucy9uaXVzaG9wX2IyYjJjL2NvcmUvaW5kZXgucGhwL3dhcC9sb2dpbi90ZXN0YWRkJztcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcclxuICAgIHd4T3BlbmlkOiAnXCJ7XCJzZXNzaW9uX2tleVwiOlwibFpxMTdleTArU1Eyc3Jxdks2ZHp3UT09XCIsXCJvcGVuaWRcIjpcIm96VHUyNU9ZUm9QX3kyazUzdlEwMlhSME50dGtcIn1cIicsXHJcbiAgICBhc3NlcnQ6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKG9wdGlvbnM6IGFueSkge1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhLmNhbklVc2UpXHJcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensFxyXG4gICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IEh0dHBBcGlGb2xsb3csXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNvZGU6IHJlcy5jb2RlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHN1Y2Nlc3MuZGF0YSkub3BlbmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgICAgICBhc3NlcnQ6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGJpbmRHZXRVc2VySW5mbyhwYXJhbXM6IGFueSkgeyAgLy/mlrDnlKjmiLflkK/nlKjms6jlhoxcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogSHR0cEFwaUZvbGxvdyxcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBkYXRhOiB7IGNvZGU6IHJlcy5jb2RlIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiAoc3VjY2VzczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG5cclxuICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgdXJsOiByZWdlc3QsXHJcbiAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiAoc3VjY2VzczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coSHR0cEFwaUZvbGxvdyk7XHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gIH0sXHJcblxyXG4gIGNhbGxiYWNrZm4oKSB7ICAvL+WPlua2iOeZu+mZhiDov5Tlm57pppbpobVcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn0pXHJcbiJdfQ==