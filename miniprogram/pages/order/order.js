"use strict";
var order = getApp();
Page({
    data: {
        url: ""
    },
    onLoad: function () {
        this.setData({
            url: "https://m1.coffeedz.com/index.php?s=/wap/order/lists"
        });
    },
    onShareAppMessage: function () {
        return {
            title: '我的商城',
            path: '/pages/index/index'
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFbEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUVELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLHNEQUFzRDtTQUM5RCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxNQUFNO1lBQ2IsSUFBSSxFQUFFLG9CQUFvQjtTQUMzQixDQUFBO0lBQ0gsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9yZGVyID0gZ2V0QXBwPElBcHBPcHRpb24+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHVybDogXCJcIlxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9tMS5jb2ZmZWVkei5jb20vaW5kZXgucGhwP3M9L3dhcC9vcmRlci9saXN0c2BcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+aIkeeahOWVhuWfjicsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuIl19