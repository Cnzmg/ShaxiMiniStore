"use strict";
var pay = getApp();
Page({
    data: {},
    onLoad: function () {
        var HttpApiFollow = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/order/login';
        wx.login({
            success: function (res) {
                wx.request({
                    url: HttpApiFollow,
                    method: "POST",
                    data: { code: res.code },
                    success: function (success) {
                        wx.requestPayment({
                            timeStamp: success.data.timeStamp,
                            nonceStr: success.data.nonceStr,
                            package: success.data.package,
                            signType: success.data.signType,
                            paySign: success.data.paySign,
                            success: function (res) {
                                if (res.errMsg == 'requestPayment:ok') {
                                    console.log("success");
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
                                wx.navigateBack({
                                    delta: 1
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFFTDtJQUVELE1BQU0sRUFBTjtRQUNFLElBQU0sYUFBYSxHQUFHLDZFQUE2RSxDQUFDO1FBRXBHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsR0FBRyxFQUFFLGFBQWE7b0JBQ2xCLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFDO29CQUN0QixPQUFPLEVBQUUsVUFBQyxPQUFZO3dCQUNsQixFQUFFLENBQUMsY0FBYyxDQUFDOzRCQUNoQixTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTOzRCQUNqQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPOzRCQUM3QixRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFROzRCQUMvQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPOzRCQUM3QixPQUFPLEVBQUUsVUFBQyxHQUFHO2dDQUNULElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxtQkFBbUIsRUFBRTtvQ0FDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtpQ0FDekI7cUNBQU07b0NBQ0gsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3Q0FDVCxLQUFLLEVBQUUsTUFBTTt3Q0FDYixJQUFJLEVBQUUsTUFBTTt3Q0FDWixRQUFRLEVBQUUsSUFBSTtxQ0FDakIsQ0FBQyxDQUFBO2lDQUNMOzRCQUNMLENBQUM7NEJBQ0QsSUFBSSxFQUFFO2dDQUNGLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0NBQ1osS0FBSyxFQUFFLENBQUM7aUNBQ1gsQ0FBQyxDQUFBOzRCQUNOLENBQUM7eUJBQ0osQ0FBQyxDQUFBO29CQUNKLENBQUM7b0JBQ0QsSUFBSSxFQUFFLFVBQUEsR0FBRzt3QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNwQixDQUFDO2lCQUNKLENBQUMsQ0FBQTtZQUNGLENBQUM7U0FDRixDQUFDLENBQUE7SUFFSixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxNQUFNO1lBQ2IsSUFBSSxFQUFFLG9CQUFvQjtTQUMzQixDQUFBO0lBQ0gsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBheSA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcblxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIGNvbnN0IEh0dHBBcGlGb2xsb3cgPSAnaHR0cHM6Ly9wb3MuY2Jjb2ZmZWUuY24vYWRkb25zL25pdXNob3BfYjJiMmMvY29yZS9pbmRleC5waHAvd2FwL29yZGVyL2xvZ2luJztcclxuICAgIC8vIGNvbnN0IEh0dHBBcGlGb2xsb3cgPSAnaHR0cHM6Ly9wb3MuY2Jjb2ZmZWUuY24vYWRkb25zL25pdXNob3BfYjJiMmMvY29yZS9pbmRleC5waHAvd2FwL29yZGVyL3Rlc3RzJztcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogSHR0cEFwaUZvbGxvdyxcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBkYXRhOiB7Y29kZTogcmVzLmNvZGV9LFxyXG4gICAgICAgICAgc3VjY2VzczogKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIHd4LnJlcXVlc3RQYXltZW50KHtcclxuICAgICAgICAgICAgICAgIHRpbWVTdGFtcDogc3VjY2Vzcy5kYXRhLnRpbWVTdGFtcCxcclxuICAgICAgICAgICAgICAgIG5vbmNlU3RyOiBzdWNjZXNzLmRhdGEubm9uY2VTdHIsXHJcbiAgICAgICAgICAgICAgICBwYWNrYWdlOiBzdWNjZXNzLmRhdGEucGFja2FnZSxcclxuICAgICAgICAgICAgICAgIHNpZ25UeXBlOiBzdWNjZXNzLmRhdGEuc2lnblR5cGUsXHJcbiAgICAgICAgICAgICAgICBwYXlTaWduOiBzdWNjZXNzLmRhdGEucGF5U2lnbixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVyck1zZyA9PSAncmVxdWVzdFBheW1lbnQ6b2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdWNjZXNzYClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmlK/ku5jlpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7ICAvL+WPlua2iOaUr+S7mCDov5Tlm57kuIrkuIDlsYJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICfmiJHnmoTllYbln44nLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcbiJdfQ==