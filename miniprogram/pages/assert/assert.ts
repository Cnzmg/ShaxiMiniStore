const assert = getApp<IAppOption>()

Page({
  data: {
    url: ``
  },

  onLoad(options: any) {
    this.setData({
        url: 'https://m1.coffeedz.com/index.php?s=/wap/minipage&token=' + options.token
    })
  },
  
})