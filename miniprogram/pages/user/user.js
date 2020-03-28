"use strict";
var user = getApp();
Page({
    data: {
        url: "",
    },
    onLoad: function (options) {
        console.log(options);
        this.setData({
            url: "https://m1.coffeedz.com/index.php?s=/wap/member/index"
        });
    },
    callbackfn: function () {
        wx.navigateTo({
            url: '/pages/index/index'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU0sSUFBSSxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRWpDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFFRCxNQUFNLEVBQU4sVUFBTyxPQUFZO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSx1REFBdUQ7U0FDL0QsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQUVELFVBQVU7UUFDUixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9CQUFvQjtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXNlciA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICB1cmw6IFwiXCIsXHJcbiAgfSxcclxuXHJcbiAgb25Mb2FkKG9wdGlvbnM6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHVybDogXCJodHRwczovL20xLmNvZmZlZWR6LmNvbS9pbmRleC5waHA/cz0vd2FwL21lbWJlci9pbmRleFwiXHJcbiAgICB9KVxyXG5cclxuICB9LFxyXG5cclxuICBjYWxsYmFja2ZuKCkgeyAgLy/lj5bmtojnmbvpmYYg6L+U5Zue6aaW6aG1XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59KVxyXG4iXX0=