"use strict";
var login = getApp();
Page({
    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function (options) {
        console.log(this.data.canIUse);
        console.log(options);
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            console.log(res.userInfo);
                        }
                    });
                }
            }
        });
    },
    bindGetUserInfo: function (params) {
        var HttpApiFollow = 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/order/login';
        console.log(HttpApiFollow);
        console.log(params);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFbEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7S0FDcEQ7SUFFRCxNQUFNLEVBQU4sVUFBTyxPQUFZO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDVixPQUFPLFlBQUUsR0FBRztnQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBUyxHQUFHOzRCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTt3QkFDM0IsQ0FBQztxQkFDRixDQUFDLENBQUE7aUJBQ0g7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGVBQWUsRUFBZixVQUFnQixNQUFXO1FBQ3pCLElBQU0sYUFBYSxHQUFHLDZFQUE2RSxDQUFDO1FBQ3BHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9naW4gPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKG9wdGlvbnM6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhLmNhbklVc2UpXHJcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzcyAocmVzKXtcclxuICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensFxyXG4gICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudXNlckluZm8pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9LFxyXG5cclxuICBiaW5kR2V0VXNlckluZm8ocGFyYW1zOiBhbnkpIHtcclxuICAgIGNvbnN0IEh0dHBBcGlGb2xsb3cgPSAnaHR0cHM6Ly9wb3MuY2Jjb2ZmZWUuY24vYWRkb25zL25pdXNob3BfYjJiMmMvY29yZS9pbmRleC5waHAvd2FwL29yZGVyL2xvZ2luJztcclxuICAgIGNvbnNvbGUubG9nKEh0dHBBcGlGb2xsb3cpO1xyXG4gICAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICB9XHJcblxyXG59KVxyXG4iXX0=