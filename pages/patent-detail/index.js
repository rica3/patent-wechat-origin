import { getPatentDetail, searchSimilarPatents } from '../../services/patentService';

Page({
  data: {
    patent: null,
    similarPatents: [],
    loading: true
  },

  async onLoad(options) {
    const { id } = options;
    try {
      // 获取专利详情
      const patent = await getPatentDetail(id);
      this.setData({ patent });

      // 获取相似专利
      const similarPatents = await searchSimilarPatents(id);
      this.setData({ 
        similarPatents,
        loading: false 
      });
    } catch (error) {
      console.error('获取专利详情失败:', error);
      wx.showToast({
        title: '获取专利详情失败',
        icon: 'none'
      });
      this.setData({ loading: false });
    }
  },

  onSimilarPatentClick(event) {
    const { patent } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/patent-detail/index?id=${patent.id}`
    });
  }
}); 