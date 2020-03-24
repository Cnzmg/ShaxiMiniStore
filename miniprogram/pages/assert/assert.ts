const assert = getApp<IAppOption>()

Page({
  data: {
    url: ``
  },

  onLoad(options: any) {
      console.log(options);
    this.setData({
        url: 'https://pos.cbcoffee.cn/addons/niushop_b2b2c/core/index.php/wap/login/index.html?openid=' + options.openid +'&user=' + options.user
    })
  },
})