// app.js

App({

  // 监听小程序初始化
  onLaunch() {
    console.log('app.js==onLaunch', this.getDateTime());
  },

  // 监听小程序启动或切前台
  onShow() {
    console.log('app.js==onShow', this.getDateTime());
  },

  // 监听小程序切后台
  onHide() {
    console.log('app.js==onHide', this.getDateTime());
  },

  getDateTime() {
    let _time = new Date().getTime();
    return _time;
  },
  // toUTCString()

  globalData: {
    userInfo: null,
  }
})
