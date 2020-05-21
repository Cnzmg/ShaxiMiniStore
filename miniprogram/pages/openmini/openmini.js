"use strict";
var openmini = getApp();
Page({
    data: {
        appid: 'wx0c15f458bcbbc11d',
        product: ''
    },
    onLoad: function (options) {
        console.log(options);
        this.setData({
            appid: options.appid,
            product: '这是什么产品哦'
        });
    },
    bindViewTap: function () {
        wx.navigateToMiniProgram({
            appId: this.data.appid,
            path: 'pages/index/index',
            extraData: {
                foo: 'bar'
            },
            envVersion: 'develop',
            success: function (res) {
                console.log(res);
            },
            fail: function (err) {
                wx.showToast({
                    title: err.errMsg,
                    icon: 'none'
                });
            }
        });
    },
    onShareAppMessage: function () {
        return {
            title: ' ',
            path: '/pages/index/index'
        };
    },
    handleContact: function (e) {
        console.log(e.detail.path);
        console.log(e.detail.query);
    },
    onHide: function () {
        var _this = this;
        wx.login({
            success: function (res) {
                wx.request({
                    url: 'https://m1.coffeedz.com/index.php?s=/wap/minipage/checkSignature',
                    data: { code: res.code, product: _this.data.product },
                    method: 'POST',
                    success: function (params) {
                        wx.showToast({
                            title: JSON.stringify(params.data),
                            icon: 'none',
                            duration: 20000
                        });
                    }
                });
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbm1pbmkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcGVubWluaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFckMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0YsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixPQUFPLEVBQUUsRUFBRTtLQUNkO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixPQUFPLEVBQUUsU0FBUztTQUNyQixDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsV0FBVztRQUNULEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLElBQUksRUFBRSxtQkFBbUI7WUFDekIsU0FBUyxFQUFFO2dCQUNULEdBQUcsRUFBRSxLQUFLO2FBQ1g7WUFDRCxVQUFVLEVBQUUsU0FBUztZQUNyQixPQUFPLFlBQUMsR0FBRztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDSixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNULEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTTtvQkFDakIsSUFBSSxFQUFFLE1BQU07aUJBQ2YsQ0FBQyxDQUFBO1lBQ04sQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxpQkFBaUI7UUFDZixPQUFPO1lBQ0wsS0FBSyxFQUFFLEdBQUc7WUFDVixJQUFJLEVBQUUsb0JBQW9CO1NBQzNCLENBQUE7SUFDSCxDQUFDO0lBRUQsYUFBYSxFQUFiLFVBQWUsQ0FBTTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCxNQUFNLEVBQUU7UUFBQSxpQkFrQlA7UUFoQkMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUUsa0VBQWtFO29CQUN2RSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7b0JBQ25ELE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sRUFBQyxVQUFTLE1BQVc7d0JBQzFCLEVBQUUsQ0FBQyxTQUFTLENBQUM7NEJBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDbEMsSUFBSSxFQUFFLE1BQU07NEJBQ1osUUFBUSxFQUFFLEtBQUs7eUJBQ2hCLENBQUMsQ0FBQTtvQkFDSixDQUFDO2lCQUNGLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3Blbm1pbmkgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgICBhcHBpZDogJ3d4MGMxNWY0NThiY2JiYzExZCcsXHJcbiAgICAgIHByb2R1Y3Q6ICcnXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKG9wdGlvbnM6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGFwcGlkOiBvcHRpb25zLmFwcGlkLFxyXG4gICAgICAgICAgcHJvZHVjdDogJ+i/meaYr+S7gOS5iOS6p+WTgeWTpidcclxuICAgICAgfSlcclxuICB9LFxyXG5cclxuICBiaW5kVmlld1RhcCgpe1xyXG4gICAgd3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcclxuICAgICAgICBhcHBJZDogdGhpcy5kYXRhLmFwcGlkLFxyXG4gICAgICAgIHBhdGg6ICdwYWdlcy9pbmRleC9pbmRleCcsXHJcbiAgICAgICAgZXh0cmFEYXRhOiB7XHJcbiAgICAgICAgICBmb286ICdiYXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnZWZXJzaW9uOiAnZGV2ZWxvcCcsXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoZXJyKXtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBlcnIuZXJyTXNnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH0sXHJcblxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6ICcgJyxcclxuICAgICAgcGF0aDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBoYW5kbGVDb250YWN0IChlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnBhdGgpXHJcbiAgICBjb25zb2xlLmxvZyhlLmRldGFpbC5xdWVyeSlcclxuICB9LFxyXG5cclxuICBvbkhpZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8g6aG16Z2i5LuO5YmN5Y+w5Y+Y5Li65ZCO5Y+w5pe25omn6KGMXHJcbiAgICB3eC5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL20xLmNvZmZlZWR6LmNvbS9pbmRleC5waHA/cz0vd2FwL21pbmlwYWdlL2NoZWNrU2lnbmF0dXJlJyxcclxuICAgICAgICAgIGRhdGE6IHsgY29kZTogcmVzLmNvZGUsIHByb2R1Y3Q6IHRoaXMuZGF0YS5wcm9kdWN0fSxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihwYXJhbXM6IGFueSkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBKU09OLnN0cmluZ2lmeShwYXJhbXMuZGF0YSksXHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbn0pXHJcbiJdfQ==