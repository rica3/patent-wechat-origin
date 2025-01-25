import newsData from '../mock/newsData.json';

export const fetchNewsData = async () => {
  // 模拟API请求延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newsData);
    }, 1000);
  });
};

export const filterNewsByCategory = (news, category) => {
  return news[category] || [];
}; 