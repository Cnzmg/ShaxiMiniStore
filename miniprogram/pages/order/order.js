"use strict";
var order = getApp();
Page({
    data: {
        url: ""
    },
    onLoad: function () {
        this.setData({
            url: "https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/order/myorderlist?shop_id=0"
        });
    },
    onShareAppMessage: function () {
        return {
            title: '我的商城',
            path: '/pages/index/index'
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFbEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUVELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLDZGQUE2RjtTQUNyRyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTztZQUNMLEtBQUssRUFBRSxNQUFNO1lBQ2IsSUFBSSxFQUFFLG9CQUFvQjtTQUMzQixDQUFBO0lBQ0gsQ0FBQztDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9yZGVyID0gZ2V0QXBwPElBcHBPcHRpb24+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHVybDogXCJcIlxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly9wb3MuY2Jjb2ZmZWUuY24vYWRkb25zL25pdXNob3BfYjJiMmMvY29yZS9pbmRleC5waHAvd2FwL29yZGVyL215b3JkZXJsaXN0P3Nob3BfaWQ9MGBcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+aIkeeahOWVhuWfjicsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuIl19