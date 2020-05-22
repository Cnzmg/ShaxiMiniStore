"use strict";
var view = getApp();
Page({
    data: {
        product: ''
    },
    onLoad: function (options) {
        this.setData({
            product: options.product || '？'
        });
    },
    onShareAppMessage: function () {
        return {
            title: ' ',
            path: '/pages/index/index'
        };
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
                        console.info(params);
                    }
                });
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU0sSUFBSSxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRWpDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRSxFQUFFO0tBQ2Q7SUFFRCxNQUFNLEVBQU4sVUFBTyxPQUFZO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxJQUFJLEdBQUc7U0FDbEMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU87WUFDTCxLQUFLLEVBQUUsR0FBRztZQUNWLElBQUksRUFBRSxvQkFBb0I7U0FDM0IsQ0FBQTtJQUNILENBQUM7SUFFRCxNQUFNLEVBQUU7UUFBQSxpQkFtQlA7UUFqQkMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUUsa0VBQWtFO29CQUN2RSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7b0JBQ25ELE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sRUFBQyxVQUFTLE1BQVc7d0JBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBTXZCLENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2aWV3ID0gZ2V0QXBwPElBcHBPcHRpb24+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgICAgcHJvZHVjdDogJydcclxuICB9LFxyXG5cclxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwcm9kdWN0OiBvcHRpb25zLnByb2R1Y3QgfHwgJ++8nydcclxuICAgICAgfSlcclxuICB9LFxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiAnICcsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb25IaWRlOiBmdW5jdGlvbigpIHtcclxuICAgIC8vIOmhtemdouS7juWJjeWPsOWPmOS4uuWQjuWPsOaXtuaJp+ihjFxyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9tMS5jb2ZmZWVkei5jb20vaW5kZXgucGhwP3M9L3dhcC9taW5pcGFnZS9jaGVja1NpZ25hdHVyZScsXHJcbiAgICAgICAgICBkYXRhOiB7IGNvZGU6IHJlcy5jb2RlLCBwcm9kdWN0OiB0aGlzLmRhdGEucHJvZHVjdH0sXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24ocGFyYW1zOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIC8vIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIC8vICAgdGl0bGU6IEpTT04uc3RyaW5naWZ5KHBhcmFtcy5kYXRhKSxcclxuICAgICAgICAgICAgLy8gICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgIC8vICAgZHVyYXRpb246IDIwMDAwXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG5cclxufSlcclxuIl19