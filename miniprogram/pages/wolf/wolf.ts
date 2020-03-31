const wolf = getApp<IAppOption>()

Page({
  data: {
      value:[{name: '余额'},{name: '积分'},{name: '优惠券'}],
      values:[
          {name: '签到', url: "https://m1.coffeedz.com/upload/default/wap_nav/sign-in-new.png"},
          {name: '个人资料', url: "https://m1.coffeedz.com/upload/default/wap_nav/member-new.png"},
          {name: '收货地址', url: "https://m1.coffeedz.com/upload/default/wap_nav/receiving.png"},
          {name: '提现账号', url: "https://m1.coffeedz.com/upload/default/wap_nav/cash.png"},
          {name: '推广二维码', url: "https://m1.coffeedz.com/upload/default/wap_nav/extension-new.png"},
          {name: '优惠券', url: "https://m1.coffeedz.com/upload/default/wap_nav/discount.png"},
          {name: '我的拼单', url: "https://m1.coffeedz.com/upload/default/wap_nav/pingtuan-new.png"},
          {name: '我的砍价', url: "https://m1.coffeedz.com/upload/default/wap_nav/bargain.png"},
          {name: '虚拟码', url: "https://m1.coffeedz.com/upload/default/wap_nav/fictitious-new.png"},
          {name: '中奖记录', url: "https://m1.coffeedz.com/upload/default/wap_nav/winning.png"},
          {name: '我的收藏', url: "https://m1.coffeedz.com/upload/default/wap_nav/collection-new.png"},
          {name: '我的足迹', url: "https://m1.coffeedz.com/upload/default/wap_nav/footprint.png"},
          {name: '拼团订单', url: "https://m1.coffeedz.com/upload/default/wap_nav/pintuan.png"},
          {name: '预售订单', url: "https://m1.coffeedz.com/upload/default/wap_nav/yushou.png"},
        ],
  },

  onLoad(options: any) {
    console.log(options);
  },

  user(){
    wx.reLaunch({
        url: '/pages/login/login'
    })
  },

  callbackfn() {  //取消登陆 返回首页
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }

})
