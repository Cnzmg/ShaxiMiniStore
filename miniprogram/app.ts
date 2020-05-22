// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    const updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate(() => {
      // 请求完新版本信息的回调
    })
    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(() => {
      // 新的版本下载失败
    })
  },
})