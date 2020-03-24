"use strict";
var assert = getApp();
Page({
    data: {
        url: ""
    },
    onLoad: function (options) {
        console.log(options);
        this.setData({
            url: 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/login/index.html?openid=' + options.openid + '&user=' + options.user
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNzZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLE1BQU0sR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVuQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsRUFBRTtLQUNSO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSwwRkFBMEYsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFFLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSTtTQUM1SSxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXNzZXJ0ID0gZ2V0QXBwPElBcHBPcHRpb24+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHVybDogYGBcclxuICB9LFxyXG5cclxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL3Bvcy5jYmNvZmZlZS5jbi9hZGRvbnMvbml1c2hvcF9iMmIyYy9jb3JlL2luZGV4LnBocC93YXAvbG9naW4vaW5kZXguaHRtbD9vcGVuaWQ9JyArIG9wdGlvbnMub3BlbmlkICsnJnVzZXI9JyArIG9wdGlvbnMudXNlclxyXG4gICAgfSlcclxuICB9LFxyXG59KSJdfQ==