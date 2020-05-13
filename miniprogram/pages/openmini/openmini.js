"use strict";
var openmini = getApp();
Page({
    data: {
        appid: 'wx0c15f458bcbbc11d'
    },
    onLoad: function (options) {
        console.log(options);
        this.setData({
            appid: options.appid
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbm1pbmkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcGVubWluaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFckMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0YsS0FBSyxFQUFFLG9CQUFvQjtLQUM5QjtJQUVELE1BQU0sRUFBTixVQUFPLE9BQVk7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7U0FDdkIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELFdBQVc7UUFDVCxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLEVBQUUsS0FBSzthQUNYO1lBQ0QsVUFBVSxFQUFFLFNBQVM7WUFDckIsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixDQUFDO1lBQ0QsSUFBSSxZQUFDLEdBQUc7Z0JBQ0osRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDVCxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU07b0JBQ2pCLElBQUksRUFBRSxNQUFNO2lCQUNmLENBQUMsQ0FBQTtZQUNOLENBQUM7U0FDRixDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxHQUFHO1lBQ1YsSUFBSSxFQUFFLG9CQUFvQjtTQUMzQixDQUFBO0lBQ0gsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9wZW5taW5pID0gZ2V0QXBwPElBcHBPcHRpb24+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgICAgYXBwaWQ6ICd3eDBjMTVmNDU4YmNiYmMxMWQnXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKG9wdGlvbnM6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGFwcGlkOiBvcHRpb25zLmFwcGlkXHJcbiAgICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgYmluZFZpZXdUYXAoKXtcclxuICAgIHd4Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XHJcbiAgICAgICAgYXBwSWQ6IHRoaXMuZGF0YS5hcHBpZCxcclxuICAgICAgICBwYXRoOiAncGFnZXMvaW5kZXgvaW5kZXgnLFxyXG4gICAgICAgIGV4dHJhRGF0YToge1xyXG4gICAgICAgICAgZm9vOiAnYmFyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW52VmVyc2lvbjogJ2RldmVsb3AnLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKGVycil7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZXJyLmVyck1zZyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9LFxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAnICcsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuIl19