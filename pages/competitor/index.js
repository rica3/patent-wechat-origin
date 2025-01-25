import { searchPatents } from '../../services/patentService';
import { legalStatusOptions, ipcClassOptions } from '../../mock/patentData';

Page({
  data: {
    keyword: '',
    dateRange: '',
    legalStatus: '',
    ipcClass: '',
    loading: false,
    patents: [],
    dateRangeOptions: [
      { text: '全部时间', value: '' },
      { text: '近一年', value: 'last1year' },
      { text: '近三年', value: 'last3years' },
      { text: '近五年', value: 'last5years' }
    ],
    legalStatusOptions,
    ipcClassOptions
  },

  onLoad() {
    this.search();
  },

  onSearchChange(e) {
    this.setData({ keyword: e.detail });
  },

  onSearch() {
    this.search();
  },

  onDateRangeChange(e) {
    this.setData({ dateRange: e.detail }, () => {
      this.search();
    });
  },

  onLegalStatusChange(e) {
    this.setData({ legalStatus: e.detail }, () => {
      this.search();
    });
  },

  onIpcClassChange(e) {
    this.setData({ ipcClass: e.detail }, () => {
      this.search();
    });
  },

  async search() {
    try {
      this.setData({ loading: true });
      
      // 构建搜索参数
      const params = {
        keyword: this.data.keyword,
        legalStatus: this.data.legalStatus,
        ipcClass: this.data.ipcClass
      };

      // 处理日期范围
      if (this.data.dateRange) {
        const now = new Date();
        const years = {
          'last1year': 1,
          'last3years': 3,
          'last5years': 5
        }[this.data.dateRange];
        
        if (years) {
          const startDate = new Date();
          startDate.setFullYear(now.getFullYear() - years);
          params.dateRange = [startDate, now];
        }
      }

      const patents = await searchPatents(params);

      this.setData({ 
        patents,
        loading: false 
      });
    } catch (error) {
      console.error('搜索失败:', error);
      wx.showToast({
        title: '搜索失败',
        icon: 'none'
      });
      this.setData({ loading: false });
    }
  },

  onPatentClick(event) {
    const { patent } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/patent-detail/index?id=${patent.id}`
    });
  }
}); 