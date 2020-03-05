"use strict";
var pay = getApp();
Page({
    data: {},
    onLoad: function (options) {
        var HttpApiFollow = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/order/login';
        var HttpApiFollowCall = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/pay/wchatpayresult';
        console.log(options);
        wx.login({
            success: function (res) {
                wx.request({
                    url: HttpApiFollow,
                    method: "POST",
                    data: { code: res.code, money: options.money },
                    success: function (success) {
                        wx.requestPayment({
                            timeStamp: success.data.timeStamp,
                            nonceStr: success.data.nonceStr,
                            package: success.data.package,
                            signType: success.data.signType,
                            paySign: success.data.paySign,
                            success: function (res) {
                                if (res.errMsg == 'requestPayment:ok') {
                                    wx.request({
                                        url: HttpApiFollowCall + ("/?msg=1&out_trade_no=" + options.orderId),
                                        method: "GET",
                                        data: {},
                                        success: function () {
                                            wx.reLaunch({
                                                url: '/pages/order/order'
                                            });
                                        },
                                        fail: function (err) {
                                            console.log(err);
                                        }
                                    });
                                }
                                else {
                                    wx.showToast({
                                        title: '支付失败',
                                        icon: 'none',
                                        duration: 2000
                                    });
                                }
                            },
                            fail: function () {
                                wx.reLaunch({
                                    url: '/pages/order/order'
                                });
                            }
                        });
                    },
                    fail: function (err) {
                        console.log(err);
                    }
                });
            },
        });
    },
    onShareAppMessage: function () {
        return {
            title: '我的商城',
            path: '/pages/index/index'
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFFTDtJQUVELE1BQU0sRUFBTixVQUFPLE9BQVk7UUFDakIsSUFBTSxhQUFhLEdBQUcsNkVBQTZFLENBQUM7UUFDcEcsSUFBTSxpQkFBaUIsR0FBRyxvRkFBb0YsQ0FBQztRQUUvRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsR0FBRyxFQUFFLGFBQWE7b0JBQ2xCLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFDO29CQUM1QyxPQUFPLEVBQUUsVUFBQyxPQUFZO3dCQUNsQixFQUFFLENBQUMsY0FBYyxDQUFDOzRCQUNoQixTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTOzRCQUNqQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPOzRCQUM3QixRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPOzRCQUM3QixPQUFPLEVBQUUsVUFBQyxHQUFHO2dDQUNULElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxtQkFBbUIsRUFBRTtvQ0FDbkMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3Q0FDVCxHQUFHLEVBQUUsaUJBQWlCLElBQUUsMEJBQXlCLE9BQU8sQ0FBQyxPQUFVLENBQUE7d0NBQ25FLE1BQU0sRUFBRSxLQUFLO3dDQUNiLElBQUksRUFBRSxFQUFFO3dDQUNSLE9BQU8sRUFBRTs0Q0FDUCxFQUFFLENBQUMsUUFBUSxDQUFDO2dEQUNWLEdBQUcsRUFBRSxvQkFBb0I7NkNBQzFCLENBQUMsQ0FBQTt3Q0FDSixDQUFDO3dDQUNELElBQUksRUFBRSxVQUFBLEdBQUc7NENBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTt3Q0FDcEIsQ0FBQztxQ0FDSixDQUFDLENBQUE7aUNBRUg7cUNBQU07b0NBQ0gsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3Q0FDVCxLQUFLLEVBQUUsTUFBTTt3Q0FDYixJQUFJLEVBQUUsTUFBTTt3Q0FDWixRQUFRLEVBQUUsSUFBSTtxQ0FDakIsQ0FBQyxDQUFBO2lDQUNMOzRCQUNMLENBQUM7NEJBQ0QsSUFBSSxFQUFFO2dDQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0NBQ1YsR0FBRyxFQUFFLG9CQUFvQjtpQ0FDMUIsQ0FBQyxDQUFBOzRCQUNOLENBQUM7eUJBQ0osQ0FBQyxDQUFBO29CQUNKLENBQUM7b0JBQ0QsSUFBSSxFQUFFLFVBQUEsR0FBRzt3QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNwQixDQUFDO2lCQUNKLENBQUMsQ0FBQTtZQUNGLENBQUM7U0FDRixDQUFDLENBQUE7SUFFSixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxNQUFNO1lBQ2IsSUFBSSxFQUFFLG9CQUFvQjtTQUMzQixDQUFBO0lBQ0gsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBheSA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcblxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcclxuICAgIGNvbnN0IEh0dHBBcGlGb2xsb3cgPSAnaHR0cHM6Ly9wb3MuY2Jjb2ZmZWUuY24vYWRkb25zL25pdXNob3BfYjJiMmMvY29yZS9pbmRleC5waHAvd2FwL29yZGVyL2xvZ2luJztcclxuICAgIGNvbnN0IEh0dHBBcGlGb2xsb3dDYWxsID0gJ2h0dHBzOi8vcG9zLmNiY29mZmVlLmNuL2FkZG9ucy9uaXVzaG9wX2IyYjJjL2NvcmUvaW5kZXgucGhwL3dhcC9wYXkvd2NoYXRwYXlyZXN1bHQnO1xyXG4gICAgLy8gY29uc3QgSHR0cEFwaUZvbGxvdyA9ICdodHRwczovL3Bvcy5jYmNvZmZlZS5jbi9hZGRvbnMvbml1c2hvcF9iMmIyYy9jb3JlL2luZGV4LnBocC93YXAvb3JkZXIvdGVzdHMnO1xyXG4gICAgY29uc29sZS5sb2cob3B0aW9ucylcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogSHR0cEFwaUZvbGxvdyxcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBkYXRhOiB7Y29kZTogcmVzLmNvZGUsIG1vbmV5OiBvcHRpb25zLm1vbmV5fSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICB3eC5yZXF1ZXN0UGF5bWVudCh7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3RhbXA6IHN1Y2Nlc3MuZGF0YS50aW1lU3RhbXAsXHJcbiAgICAgICAgICAgICAgICBub25jZVN0cjogc3VjY2Vzcy5kYXRhLm5vbmNlU3RyLFxyXG4gICAgICAgICAgICAgICAgcGFja2FnZTogc3VjY2Vzcy5kYXRhLnBhY2thZ2UsXHJcbiAgICAgICAgICAgICAgICBzaWduVHlwZTogc3VjY2Vzcy5kYXRhLnNpZ25UeXBlLFxyXG4gICAgICAgICAgICAgICAgcGF5U2lnbjogc3VjY2Vzcy5kYXRhLnBheVNpZ24sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJNc2cgPT0gJ3JlcXVlc3RQYXltZW50Om9rJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IEh0dHBBcGlGb2xsb3dDYWxsICtgLz9tc2c9MSZvdXRfdHJhZGVfbm89JHsgb3B0aW9ucy5vcmRlcklkIH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9vcmRlci9vcmRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pSv5LuY5aSx6LSlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvb3JkZXIvb3JkZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBcclxuICB9LFxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAn5oiR55qE5ZWG5Z+OJyxcclxuICAgICAgcGF0aDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG4iXX0=