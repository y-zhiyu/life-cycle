Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageType: 'C '
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.pageType + 'page==onLoad', this.getDateTime());
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.pageType + 'page==onReady', this.getDateTime());
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(this.data.pageType + 'page==onShow', this.getDateTime());
  },

  /**
  * 生命周期函数--监听页面隐藏
  */
  onHide: function () {
    console.log(this.data.pageType + 'page==onHide', this.getDateTime());

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(this.data.pageType + 'page==onUnload', this.getDateTime())

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 时间处理事件
  getDateTime() {
    let _time = new Date().getTime();
    return _time;
  },
  
  // 点击跳转事件
  goNavigateTo() {
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
})