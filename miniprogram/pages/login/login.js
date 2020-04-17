"use strict";
var login = getApp();
var HttpApiFollow = 'https://m1.coffeedz.com/index.php?s=/wap/minipage/miniWx#wechat_redirect';
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
                                nickName: JSON.parse(params.rawData).nickName.replace(/\%/g, '*'),
                                avatarUrl: JSON.parse(params.rawData).avatarUrl
                            });
                            wx.login({
                                success: function (res) {
                                    wx.request({
                                        url: HttpApiFollow,
                                        method: "POST",
                                        data: { code: res.code },
                                        success: function (success) {
                                            user['name'] = success.data.user.replace(/\%/g, '*');
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
        wx.showLoading({
            title: '登陆中',
            mask: true
        });
        var user = {};
        user['param'] = JSON.stringify({
            nickName: JSON.parse(params.detail.rawData).nickName.replace(/\%/g, '*'),
            avatarUrl: JSON.parse(params.detail.rawData).avatarUrl
        });
        wx.login({
            success: function (res) {
                wx.request({
                    url: HttpApiFollow,
                    method: "POST",
                    data: { code: res.code },
                    success: function (success) {
                        user['name'] = success.data.user.replace(/\%/g, '*');
                        user['token'] = success.data.token ? success.data.token : null;
                        console.log(JSON.stringify(user));
                        wx.hideLoading();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFbEMsSUFBTSxhQUFhLEdBQUcsMEVBQTBFLENBQUM7QUFFakcsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsUUFBUSxFQUFFLHNGQUFzRjtRQUNoRyxNQUFNLEVBQUUsS0FBSztLQUNkO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFQLFVBQVEsR0FBRztnQkFDVCxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBVSxNQUFNOzRCQUN2QixJQUFJLElBQUksR0FBUSxFQUFFLENBQUM7NEJBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dDQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO2dDQUNqRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUzs2QkFDaEQsQ0FBQyxDQUFDOzRCQUNILEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0NBQ1AsT0FBTyxFQUFFLFVBQUMsR0FBRztvQ0FDWCxFQUFFLENBQUMsT0FBTyxDQUFDO3dDQUNULEdBQUcsRUFB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QTtvQkFDSixDQUFDO29CQUNELElBQUksRUFBRSxVQUFBLEdBQUc7d0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDaEIsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDWCxLQUFLLEVBQUUsTUFBTTs0QkFDYixRQUFRLEVBQUUsSUFBSTt5QkFDZixDQUFDLENBQUE7b0JBQ0osQ0FBQztpQkFDRixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVU7UUFDUixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9CQUFvQjtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9naW4gPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxyXG5cclxuY29uc3QgSHR0cEFwaUZvbGxvdyA9ICdodHRwczovL20xLmNvZmZlZWR6LmNvbS9pbmRleC5waHA/cz0vd2FwL21pbmlwYWdlL21pbmlXeCN3ZWNoYXRfcmVkaXJlY3QnO1xyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgd3hPcGVuaWQ6ICdcIntcInNlc3Npb25fa2V5XCI6XCJsWnExN2V5MCtTUTJzcnF2SzZkendRPT1cIixcIm9wZW5pZFwiOlwib3pUdTI1T1lSb1BfeTJrNTN2UTAyWFIwTnR0a1wifVwiJyxcclxuICAgIGFzc2VydDogZmFsc2UsXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKG9wdGlvbnM6IGFueSkge1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhLmNhbklVc2UpXHJcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensFxyXG4gICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocGFyYW1zKSB7ICAvLyDojrflj5bnmoTnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgICBsZXQgdXNlcjogYW55ID0ge307XHJcbiAgICAgICAgICAgICAgdXNlclsncGFyYW0nXSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiBKU09OLnBhcnNlKHBhcmFtcy5yYXdEYXRhKS5uaWNrTmFtZS5yZXBsYWNlKC9cXCUvZywgJyonKSxcclxuICAgICAgICAgICAgICAgIGF2YXRhclVybDogSlNPTi5wYXJzZShwYXJhbXMucmF3RGF0YSkuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IEh0dHBBcGlGb2xsb3csXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNvZGU6IHJlcy5jb2RlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlclsnbmFtZSddID0gc3VjY2Vzcy5kYXRhLnVzZXIucmVwbGFjZSgvXFwlL2csICcqJyk7ICAvLyDnlKjmiLflkI3lrZjlgqhcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJbJ3Rva2VuJ10gPSBzdWNjZXNzLmRhdGEudG9rZW4gPyBzdWNjZXNzLmRhdGEudG9rZW4gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL3BhZ2VzL2Fzc2VydC9hc3NlcnQ/dG9rZW49XCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pyN5Yqh5byC5bi4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgICAgICBhc3NlcnQ6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGJpbmRHZXRVc2VySW5mbyhwYXJhbXM6IGFueSkgeyAgLy/mlrDnlKjmiLflkK/nlKjms6jlhoxcclxuICAgIGlmIChwYXJhbXMuZGV0YWlsLmVyck1zZyA9PSBcImdldFVzZXJJbmZvOmZhaWwgYXV0aCBkZW55XCIpIHJldHVybjtcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfnmbvpmYbkuK0nLFxyXG4gICAgICBtYXNrOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGxldCB1c2VyOiBhbnkgPSB7fTtcclxuICAgIHVzZXJbJ3BhcmFtJ10gPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG5pY2tOYW1lOiBKU09OLnBhcnNlKHBhcmFtcy5kZXRhaWwucmF3RGF0YSkubmlja05hbWUucmVwbGFjZSgvXFwlL2csICcqJyksXHJcbiAgICAgIGF2YXRhclVybDogSlNPTi5wYXJzZShwYXJhbXMuZGV0YWlsLnJhd0RhdGEpLmF2YXRhclVybFxyXG4gICAgfSk7XHJcbiAgICB3eC5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IEh0dHBBcGlGb2xsb3csXHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgZGF0YTogeyBjb2RlOiByZXMuY29kZSB9LFxyXG4gICAgICAgICAgc3VjY2VzczogKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB1c2VyWyduYW1lJ10gPSBzdWNjZXNzLmRhdGEudXNlci5yZXBsYWNlKC9cXCUvZywgJyonKTsgIC8vIOeUqOaIt+WQjeWtmOWCqFxyXG4gICAgICAgICAgICB1c2VyWyd0b2tlbiddID0gc3VjY2Vzcy5kYXRhLnRva2VuID8gc3VjY2Vzcy5kYXRhLnRva2VuIDogbnVsbDsgIC8v5paw55So5oi35Lya6L+U5ZuedG9rZW4g77yM6ICB55So5oi35Y+q5piv6L+U5ZuedXNlclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh1c2VyKSlcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgIHVybDogXCIvcGFnZXMvYXNzZXJ0L2Fzc2VydD90b2tlbj1cIiArIEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5pyN5Yqh5byC5bi4JyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGNhbGxiYWNrZm4oKSB7ICAvL+WPlua2iOeZu+mZhiDov5Tlm57pppbpobVcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn0pXHJcbiJdfQ==