// 模拟税率查询
export const queryTariffRate = (params) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hsCode: params.hsCode || '8517.1219',
        productName: '手机及零部件',
        importTariff: '0%',
        exportTariff: '0%',
        vatRate: '13%',
        preferentialRate: {
          RCEP: '0%',
          CPTPP: '0%'
        },
        notes: '享受最惠国待遇'
      });
    }, 1000);
  });
};

// 模拟海关编码查询
export const queryHsCode = (keyword) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          code: '8517.1219',
          name: '手机',
          category: '通讯设备',
          description: '包括各类手机整机及配件'
        },
        {
          code: '8517.7090',
          name: '手机零件',
          category: '通讯设备零件',
          description: '手机用天线、外壳等配件'
        }
      ]);
    }, 800);
  });
};

// 模拟通关状态查询
export const queryCustomsStatus = (declareNo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: '已放行',
        timeline: [
          { time: '2024-03-20 10:00', status: '申报', desc: '企业提交申报' },
          { time: '2024-03-20 10:30', status: '受理', desc: '海关接受申报' },
          { time: '2024-03-20 11:00', status: '查验', desc: '完成单证审核' },
          { time: '2024-03-20 14:00', status: '放行', desc: '准予放行' }
        ]
      });
    }, 1000);
  });
};

// 模拟政策法规查询
export const queryPolicies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'P001',
          title: '关于进一步优化跨境贸易营商环境的通知',
          date: '2024-03-01',
          type: '海关总署公告',
          summary: '为进一步优化跨境贸易营商环境，提升通关效率...'
        },
        {
          id: 'P002',
          title: '关于调整部分商品进出口关税的通知',
          date: '2024-02-15',
          type: '税收政策',
          summary: '自2024年3月1日起，调整以下商品的进出口关税税率...'
        }
      ]);
    }, 800);
  });
}; 