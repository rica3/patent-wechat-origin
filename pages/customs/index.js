import { 
  queryTariffRate,
  queryCustomsStatus
} from '../../services/customsService';

Page({
  data: {
    activeTab: 'tariff',
    hsCode: '',
    productName: '',
    declareNo: '',
    tariffResult: null,
    statusResult: null
  },

  onTabChange(event) {
    this.setData({
      activeTab: event.detail.name
    });
  },

  async onQueryTariff() {
    if (!this.data.hsCode && !this.data.productName) {
      wx.showToast({
        title: '请输入查询条件',
        icon: 'none'
      });
      return;
    }

    try {
      const result = await queryTariffRate({
        hsCode: this.data.hsCode,
        productName: this.data.productName
      });
      this.setData({ tariffResult: result });
    } catch (error) {
      console.error('查询失败:', error);
      wx.showToast({
        title: '查询失败',
        icon: 'none'
      });
    }
  },

  async onQueryStatus() {
    if (!this.data.declareNo) {
      wx.showToast({
        title: '请输入报关单号',
        icon: 'none'
      });
      return;
    }

    try {
      const result = await queryCustomsStatus(this.data.declareNo);
      this.setData({ statusResult: result });
    } catch (error) {
      console.error('查询失败:', error);
      wx.showToast({
        title: '查询失败',
        icon: 'none'
      });
    }
  }
}); 