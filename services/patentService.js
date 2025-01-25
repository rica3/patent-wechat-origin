import { mockPatents } from '../mock/patentData';

// 模拟专利搜索
export const searchPatents = (params) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = mockPatents.filter(patent => {
        // 关键词匹配
        if (params.keyword && !patent.title.includes(params.keyword) && 
            !patent.abstract.includes(params.keyword) && 
            !patent.applicant.includes(params.keyword)) {
          return false;
        }
        // 日期范围筛选
        if (params.dateRange) {
          const date = new Date(patent.applicationDate);
          if (date < params.dateRange[0] || date > params.dateRange[1]) {
            return false;
          }
        }
        // 法律状态筛选
        if (params.legalStatus && patent.legalStatus !== params.legalStatus) {
          return false;
        }
        // IPC分类筛选
        if (params.ipcClass && !patent.ipcClass.includes(params.ipcClass)) {
          return false;
        }
        return true;
      });
      resolve(results);
    }, 500);
  });
};

// 模拟相似度检索
export const searchSimilarPatents = (patentId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = mockPatents.filter(patent => 
        patent.id !== patentId && Math.random() > 0.7
      );
      resolve(results);
    }, 500);
  });
};

// 获取专利详情
export const getPatentDetail = (patentId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const patent = mockPatents.find(p => p.id === patentId);
      resolve(patent);
    }, 300);
  });
}; 