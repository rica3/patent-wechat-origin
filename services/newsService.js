import newsData from '../mock/newsData';

export const fetchNewsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newsData);
    }, 1000);
  });
};

export const getNewsDetail = (category, newsId) => {
  const categoryNews = newsData[category] || [];
  return categoryNews.find(news => news.id === newsId);
}; 