const assert = getApp<IAppOption>()

Page({
  data: {
    url: ``
  },

  onLoad(options: any) {
      console.log(options);
    this.setData({
        url: 'https://m1.coffeedz.com/index.php?s=/wap/minipage&token=' + options.token
    })
  },
})