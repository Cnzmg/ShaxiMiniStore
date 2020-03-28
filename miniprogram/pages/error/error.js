"use strict";
var error = getApp();
Page({
    data: {
        message: ''
    },
    onLoad: function (options) {
        console.log(options);
        this.setData({
            message: "出错了哦"
        });
    },
    callbackfn: function () {
        wx.navigateTo({
            url: '/pages/index/index'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFbEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLEVBQUU7S0FDZDtJQUVELE1BQU0sRUFBTixVQUFPLE9BQVk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsT0FBTyxFQUFFLE1BQU07U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVU7UUFDUixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9CQUFvQjtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXJyb3IgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgICBtZXNzYWdlOiAnJ1xyXG4gIH0sXHJcblxyXG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBtZXNzYWdlOiBcIuWHuumUmeS6huWTplwiXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGNhbGxiYWNrZm4oKSB7ICAvL+WPlua2iOeZu+mZhiDov5Tlm57pppbpobVcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn0pXHJcbiJdfQ==