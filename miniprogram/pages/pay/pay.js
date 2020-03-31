"use strict";
var pay = getApp();
Page({
    data: {},
    onLoad: function (options) {
        var HttpApiFollow = 'https://m1.coffeedz.com/index.php?s=/wap/minipage/pay';
        var HttpApiFollowCall = 'https://m1.coffeedz.com/index.php?s=/wap/minipage/wchatpayresult';
        console.log(options);
        wx.login({
            success: function (res) {
                wx.request({
                    url: HttpApiFollow,
                    method: "POST",
                    data: { code: res.code, orderId: options.orderId },
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
                                        url: HttpApiFollowCall + ("&orderId=" + options.orderId),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFFTDtJQUVELE1BQU0sRUFBTixVQUFPLE9BQVk7UUFDakIsSUFBTSxhQUFhLEdBQUcsdURBQXVELENBQUM7UUFDOUUsSUFBTSxpQkFBaUIsR0FBRyxrRUFBa0UsQ0FBQztRQUM3RixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsR0FBRyxFQUFFLGFBQWE7b0JBQ2xCLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFO29CQUNsRCxPQUFPLEVBQUUsVUFBQyxPQUFZO3dCQUNwQixFQUFFLENBQUMsY0FBYyxDQUFDOzRCQUNoQixTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTOzRCQUNqQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPOzRCQUM3QixRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPOzRCQUM3QixPQUFPLEVBQUUsVUFBQyxHQUFHO2dDQUNYLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxtQkFBbUIsRUFBRTtvQ0FDckMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3Q0FDVCxHQUFHLEVBQUUsaUJBQWlCLElBQUcsY0FBWSxPQUFPLENBQUMsT0FBUyxDQUFBO3dDQUN0RCxNQUFNLEVBQUUsS0FBSzt3Q0FDYixJQUFJLEVBQUUsRUFBRTt3Q0FDUixPQUFPLEVBQUU7NENBQ1AsRUFBRSxDQUFDLFFBQVEsQ0FBQztnREFDVixHQUFHLEVBQUUsb0JBQW9COzZDQUMxQixDQUFDLENBQUE7d0NBWUosQ0FBQzt3Q0FDRCxJQUFJLEVBQUUsVUFBQSxHQUFHOzRDQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7d0NBQ2xCLENBQUM7cUNBQ0YsQ0FBQyxDQUFBO2lDQUVIO3FDQUFNO29DQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0NBQ1gsS0FBSyxFQUFFLE1BQU07d0NBQ2IsSUFBSSxFQUFFLE1BQU07d0NBQ1osUUFBUSxFQUFFLElBQUk7cUNBQ2YsQ0FBQyxDQUFBO2lDQUNIOzRCQUNILENBQUM7NEJBQ0QsSUFBSSxFQUFFO2dDQUNKLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0NBQ1YsR0FBRyxFQUFFLG9CQUFvQjtpQ0FDMUIsQ0FBQyxDQUFBOzRCQUNKLENBQUM7eUJBQ0YsQ0FBQyxDQUFBO29CQUNKLENBQUM7b0JBQ0QsSUFBSSxFQUFFLFVBQUEsR0FBRzt3QkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNsQixDQUFDO2lCQUNGLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFFSixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxNQUFNO1lBQ2IsSUFBSSxFQUFFLG9CQUFvQjtTQUMzQixDQUFBO0lBQ0gsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBheSA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcblxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcclxuICAgIGNvbnN0IEh0dHBBcGlGb2xsb3cgPSAnaHR0cHM6Ly9tMS5jb2ZmZWVkei5jb20vaW5kZXgucGhwP3M9L3dhcC9taW5pcGFnZS9wYXknO1xyXG4gICAgY29uc3QgSHR0cEFwaUZvbGxvd0NhbGwgPSAnaHR0cHM6Ly9tMS5jb2ZmZWVkei5jb20vaW5kZXgucGhwP3M9L3dhcC9taW5pcGFnZS93Y2hhdHBheXJlc3VsdCc7XHJcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiBIdHRwQXBpRm9sbG93LFxyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGRhdGE6IHsgY29kZTogcmVzLmNvZGUsIG9yZGVySWQ6IG9wdGlvbnMub3JkZXJJZCB9LFxyXG4gICAgICAgICAgc3VjY2VzczogKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB3eC5yZXF1ZXN0UGF5bWVudCh7XHJcbiAgICAgICAgICAgICAgdGltZVN0YW1wOiBzdWNjZXNzLmRhdGEudGltZVN0YW1wLFxyXG4gICAgICAgICAgICAgIG5vbmNlU3RyOiBzdWNjZXNzLmRhdGEubm9uY2VTdHIsXHJcbiAgICAgICAgICAgICAgcGFja2FnZTogc3VjY2Vzcy5kYXRhLnBhY2thZ2UsXHJcbiAgICAgICAgICAgICAgc2lnblR5cGU6IHN1Y2Nlc3MuZGF0YS5zaWduVHlwZSxcclxuICAgICAgICAgICAgICBwYXlTaWduOiBzdWNjZXNzLmRhdGEucGF5U2lnbixcclxuICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmVyck1zZyA9PSAncmVxdWVzdFBheW1lbnQ6b2snKSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogSHR0cEFwaUZvbGxvd0NhbGwgKyBgJm9yZGVySWQ9JHtvcHRpb25zLm9yZGVySWR9YCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvb3JkZXIvb3JkZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiAnL3BhZ2VzL29yZGVyL29yZGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ+aUr+S7mOWksei0pScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pSv5LuY5aSx6LSlJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL29yZGVyL29yZGVyJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICB9LFxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAn5oiR55qE5ZWG5Z+OJyxcclxuICAgICAgcGF0aDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG4iXX0=