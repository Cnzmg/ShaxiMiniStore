"use strict";
App({
    globalData: {},
    onLaunch: function () {
        var updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(function () {
        });
        updateManager.onUpdateReady(function () {
            wx.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: function (res) {
                    if (res.confirm) {
                        updateManager.applyUpdate();
                    }
                }
            });
        });
        updateManager.onUpdateFailed(function () {
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVE7UUFDTixJQUFNLGFBQWEsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFFL0IsQ0FBQyxDQUFDLENBQUE7UUFDRixhQUFhLENBQUMsYUFBYSxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsT0FBTyxFQUFFLFVBQVUsR0FBRztvQkFDcEIsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO3dCQUNmLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtxQkFDNUI7Z0JBQ0gsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0YsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUU3QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbkFwcDxJQXBwT3B0aW9uPih7XG4gIGdsb2JhbERhdGE6IHt9LFxuICBvbkxhdW5jaCgpIHtcbiAgICBjb25zdCB1cGRhdGVNYW5hZ2VyID0gd3guZ2V0VXBkYXRlTWFuYWdlcigpO1xuICAgIHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZSgoKSA9PiB7XG4gICAgICAvLyDor7fmsYLlrozmlrDniYjmnKzkv6Hmga/nmoTlm57osINcbiAgICB9KVxuICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeSgoKSA9PiB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+abtOaWsOaPkOekuicsXG4gICAgICAgIGNvbnRlbnQ6ICfmlrDniYjmnKzlt7Lnu4/lh4blpIflpb3vvIzmmK/lkKbph43lkK/lupTnlKjvvJ8nLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICB1cGRhdGVNYW5hZ2VyLmFwcGx5VXBkYXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKCgpID0+IHtcbiAgICAgIC8vIOaWsOeahOeJiOacrOS4i+i9veWksei0pVxuICAgIH0pXG4gIH0sXG59KSJdfQ==