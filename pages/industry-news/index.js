import { fetchNewsData } from '../../services/newsService';

Page({
  data: {
    activeTab: 'policies',
    activeTabIndex: 0,
    loading: true,
    categories: [
      { key: 'policies', tab: '内外政策', color: '#1B4B79' },
      { key: 'market', tab: '市场动态', color: '#FF8C00' }
    ],
    newsData: {
      policies: [],
      market: []
    }
  },

  onLoad() {
    this.loadNewsData();
  },

  async loadNewsData() {
    try {
      this.setData({ loading: true });
      const data = await fetchNewsData();
      console.log('Fetched news data:', data);
      this.setData({ 
        newsData: data,
        loading: false 
      });
    } catch (error) {
      console.error('Failed to fetch news:', error);
      wx.showToast({
        title: '获取新闻数据失败',
        icon: 'none'
      });
      this.setData({ loading: false });
    }
  },

  onTabChange(event) {
    const activeTab = event.detail.name;
    const activeTabIndex = this.data.categories.findIndex(
      category => category.key === activeTab
    );
    this.setData({ 
      activeTab,
      activeTabIndex 
    });
  },

  onNewsClick(event) {
    const { news } = event.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/news-detail/index?id=${news.id}&category=${this.data.activeTab}`
    });
  },

  onPullDownRefresh() {
    this.loadNewsData().then(() => {
      wx.stopPullDownRefresh();
    });
  }
}); 