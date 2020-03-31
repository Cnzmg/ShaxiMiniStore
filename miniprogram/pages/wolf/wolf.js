"use strict";
var wolf = getApp();
Page({
    data: {
        value: [{ name: '余额' }, { name: '积分' }, { name: '优惠券' }],
        values: [
            { name: '签到', url: "https://m1.coffeedz.com/upload/default/wap_nav/sign-in-new.png" },
            { name: '个人资料', url: "https://m1.coffeedz.com/upload/default/wap_nav/member-new.png" },
            { name: '收货地址', url: "https://m1.coffeedz.com/upload/default/wap_nav/receiving.png" },
            { name: '提现账号', url: "https://m1.coffeedz.com/upload/default/wap_nav/cash.png" },
            { name: '推广二维码', url: "https://m1.coffeedz.com/upload/default/wap_nav/extension-new.png" },
            { name: '优惠券', url: "https://m1.coffeedz.com/upload/default/wap_nav/discount.png" },
            { name: '我的拼单', url: "https://m1.coffeedz.com/upload/default/wap_nav/pingtuan-new.png" },
            { name: '我的砍价', url: "https://m1.coffeedz.com/upload/default/wap_nav/bargain.png" },
            { name: '虚拟码', url: "https://m1.coffeedz.com/upload/default/wap_nav/fictitious-new.png" },
            { name: '中奖记录', url: "https://m1.coffeedz.com/upload/default/wap_nav/winning.png" },
            { name: '我的收藏', url: "https://m1.coffeedz.com/upload/default/wap_nav/collection-new.png" },
            { name: '我的足迹', url: "https://m1.coffeedz.com/upload/default/wap_nav/footprint.png" },
            { name: '拼团订单', url: "https://m1.coffeedz.com/upload/default/wap_nav/pintuan.png" },
            { name: '预售订单', url: "https://m1.coffeedz.com/upload/default/wap_nav/yushou.png" },
        ],
    },
    onLoad: function (options) {
        console.log(options);
    },
    user: function () {
        wx.reLaunch({
            url: '/pages/login/login'
        });
    },
    callbackfn: function () {
        wx.navigateTo({
            url: '/pages/index/index'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29sZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvbGYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU0sSUFBSSxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRWpDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNGLEtBQUssRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQy9DLE1BQU0sRUFBQztZQUNILEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsZ0VBQWdFLEVBQUM7WUFDbkYsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSwrREFBK0QsRUFBQztZQUNwRixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLDhEQUE4RCxFQUFDO1lBQ25GLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUseURBQXlELEVBQUM7WUFDOUUsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxrRUFBa0UsRUFBQztZQUN4RixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLDZEQUE2RCxFQUFDO1lBQ2pGLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsaUVBQWlFLEVBQUM7WUFDdEYsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSw0REFBNEQsRUFBQztZQUNqRixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLG1FQUFtRSxFQUFDO1lBQ3ZGLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsNERBQTRELEVBQUM7WUFDakYsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxtRUFBbUUsRUFBQztZQUN4RixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLDhEQUE4RCxFQUFDO1lBQ25GLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsNERBQTRELEVBQUM7WUFDakYsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSwyREFBMkQsRUFBQztTQUNqRjtLQUNOO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJO1FBQ0YsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLEdBQUcsRUFBRSxvQkFBb0I7U0FDNUIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVU7UUFDUixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9CQUFvQjtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd29sZiA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICAgIHZhbHVlOlt7bmFtZTogJ+S9meminSd9LHtuYW1lOiAn56ev5YiGJ30se25hbWU6ICfkvJjmg6DliLgnfV0sXHJcbiAgICAgIHZhbHVlczpbXHJcbiAgICAgICAgICB7bmFtZTogJ+etvuWIsCcsIHVybDogXCJodHRwczovL20xLmNvZmZlZWR6LmNvbS91cGxvYWQvZGVmYXVsdC93YXBfbmF2L3NpZ24taW4tbmV3LnBuZ1wifSxcclxuICAgICAgICAgIHtuYW1lOiAn5Liq5Lq66LWE5paZJywgdXJsOiBcImh0dHBzOi8vbTEuY29mZmVlZHouY29tL3VwbG9hZC9kZWZhdWx0L3dhcF9uYXYvbWVtYmVyLW5ldy5wbmdcIn0sXHJcbiAgICAgICAgICB7bmFtZTogJ+aUtui0p+WcsOWdgCcsIHVybDogXCJodHRwczovL20xLmNvZmZlZWR6LmNvbS91cGxvYWQvZGVmYXVsdC93YXBfbmF2L3JlY2VpdmluZy5wbmdcIn0sXHJcbiAgICAgICAgICB7bmFtZTogJ+aPkOeOsOi0puWPtycsIHVybDogXCJodHRwczovL20xLmNvZmZlZWR6LmNvbS91cGxvYWQvZGVmYXVsdC93YXBfbmF2L2Nhc2gucG5nXCJ9LFxyXG4gICAgICAgICAge25hbWU6ICfmjqjlub/kuoznu7TnoIEnLCB1cmw6IFwiaHR0cHM6Ly9tMS5jb2ZmZWVkei5jb20vdXBsb2FkL2RlZmF1bHQvd2FwX25hdi9leHRlbnNpb24tbmV3LnBuZ1wifSxcclxuICAgICAgICAgIHtuYW1lOiAn5LyY5oOg5Yi4JywgdXJsOiBcImh0dHBzOi8vbTEuY29mZmVlZHouY29tL3VwbG9hZC9kZWZhdWx0L3dhcF9uYXYvZGlzY291bnQucG5nXCJ9LFxyXG4gICAgICAgICAge25hbWU6ICfmiJHnmoTmi7zljZUnLCB1cmw6IFwiaHR0cHM6Ly9tMS5jb2ZmZWVkei5jb20vdXBsb2FkL2RlZmF1bHQvd2FwX25hdi9waW5ndHVhbi1uZXcucG5nXCJ9LFxyXG4gICAgICAgICAge25hbWU6ICfmiJHnmoTnoI3ku7cnLCB1cmw6IFwiaHR0cHM6Ly9tMS5jb2ZmZWVkei5jb20vdXBsb2FkL2RlZmF1bHQvd2FwX25hdi9iYXJnYWluLnBuZ1wifSxcclxuICAgICAgICAgIHtuYW1lOiAn6Jma5ouf56CBJywgdXJsOiBcImh0dHBzOi8vbTEuY29mZmVlZHouY29tL3VwbG9hZC9kZWZhdWx0L3dhcF9uYXYvZmljdGl0aW91cy1uZXcucG5nXCJ9LFxyXG4gICAgICAgICAge25hbWU6ICfkuK3lpZborrDlvZUnLCB1cmw6IFwiaHR0cHM6Ly9tMS5jb2ZmZWVkei5jb20vdXBsb2FkL2RlZmF1bHQvd2FwX25hdi93aW5uaW5nLnBuZ1wifSxcclxuICAgICAgICAgIHtuYW1lOiAn5oiR55qE5pS26JePJywgdXJsOiBcImh0dHBzOi8vbTEuY29mZmVlZHouY29tL3VwbG9hZC9kZWZhdWx0L3dhcF9uYXYvY29sbGVjdGlvbi1uZXcucG5nXCJ9LFxyXG4gICAgICAgICAge25hbWU6ICfmiJHnmoTotrPov7knLCB1cmw6IFwiaHR0cHM6Ly9tMS5jb2ZmZWVkei5jb20vdXBsb2FkL2RlZmF1bHQvd2FwX25hdi9mb290cHJpbnQucG5nXCJ9LFxyXG4gICAgICAgICAge25hbWU6ICfmi7zlm6LorqLljZUnLCB1cmw6IFwiaHR0cHM6Ly9tMS5jb2ZmZWVkei5jb20vdXBsb2FkL2RlZmF1bHQvd2FwX25hdi9waW50dWFuLnBuZ1wifSxcclxuICAgICAgICAgIHtuYW1lOiAn6aKE5ZSu6K6i5Y2VJywgdXJsOiBcImh0dHBzOi8vbTEuY29mZmVlZHouY29tL3VwbG9hZC9kZWZhdWx0L3dhcF9uYXYveXVzaG91LnBuZ1wifSxcclxuICAgICAgICBdLFxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gIH0sXHJcblxyXG4gIHVzZXIoKXtcclxuICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGNhbGxiYWNrZm4oKSB7ICAvL+WPlua2iOeZu+mZhiDov5Tlm57pppbpobVcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn0pXHJcbiJdfQ==