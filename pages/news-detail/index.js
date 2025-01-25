import { getNewsDetail } from '../../services/newsService';

Page({
  data: {
    news: null,
    categoryColor: '',
    categoryName: ''
  },

  onLoad(options) {
    const { id, category } = options;
    const news = getNewsDetail(category, id);
    
    const categories = {
      policies: { name: '内外政策', color: '#1B4B79' },
      market: { name: '市场动态', color: '#FF8C00' },
      competitors: { name: '竞品动向', color: '#4B9CD3' }
    };

    this.setData({
      news,
      categoryColor: categories[category].color,
      categoryName: categories[category].name
    });
  }
}); 