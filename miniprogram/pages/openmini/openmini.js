"use strict";
var openmini = getApp();
Page({
    data: {
        appid: 'wx0c15f458bcbbc11d'
    },
    onLoad: function (options) {
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
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbm1pbmkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcGVubWluaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFckMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0YsS0FBSyxFQUFFLG9CQUFvQjtLQUM5QjtJQUVELE1BQU0sRUFBTixVQUFPLE9BQVk7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1NBQ3ZCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdEIsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxFQUFFLEtBQUs7YUFDWDtZQUNELFVBQVUsRUFBRSxTQUFTO1lBQ3JCLE9BQU8sWUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNKLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNO29CQUNqQixJQUFJLEVBQUUsTUFBTTtpQkFDZixDQUFDLENBQUE7WUFDTixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU87WUFDTCxLQUFLLEVBQUUsR0FBRztZQUNWLElBQUksRUFBRSxvQkFBb0I7U0FDM0IsQ0FBQTtJQUNILENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvcGVubWluaSA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICAgIGFwcGlkOiAnd3gwYzE1ZjQ1OGJjYmJjMTFkJ1xyXG4gIH0sXHJcblxyXG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGFwcGlkOiBvcHRpb25zLmFwcGlkXHJcbiAgICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgYmluZFZpZXdUYXAoKXtcclxuICAgIHd4Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XHJcbiAgICAgICAgYXBwSWQ6IHRoaXMuZGF0YS5hcHBpZCxcclxuICAgICAgICBwYXRoOiAncGFnZXMvaW5kZXgvaW5kZXgnLFxyXG4gICAgICAgIGV4dHJhRGF0YToge1xyXG4gICAgICAgICAgZm9vOiAnYmFyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW52VmVyc2lvbjogJ2RldmVsb3AnLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKGVycil7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZXJyLmVyck1zZyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9LFxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAnICcsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbn0pXHJcbiJdfQ==