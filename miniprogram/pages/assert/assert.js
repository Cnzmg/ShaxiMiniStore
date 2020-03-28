"use strict";
var assert = getApp();
Page({
    data: {
        url: ""
    },
    onLoad: function (options) {
        console.log(options);
        this.setData({
            url: 'https://m1.coffeedz.com/index.php?s=/wap/minipage&token=' + options.token
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXNzZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLE1BQU0sR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVuQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsRUFBRTtLQUNSO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSwwREFBMEQsR0FBRyxPQUFPLENBQUMsS0FBSztTQUNsRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXNzZXJ0ID0gZ2V0QXBwPElBcHBPcHRpb24+KClcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHVybDogYGBcclxuICB9LFxyXG5cclxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB1cmw6ICdodHRwczovL20xLmNvZmZlZWR6LmNvbS9pbmRleC5waHA/cz0vd2FwL21pbmlwYWdlJnRva2VuPScgKyBvcHRpb25zLnRva2VuXHJcbiAgICB9KVxyXG4gIH0sXHJcbn0pIl19