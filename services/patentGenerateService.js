// 模拟调用大模型API生成专利文本
export const generatePatentDraft = (input) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: '一种基于' + input.substring(0, 10) + '的方法及系统',
        claims: [
          '1. 一种方法，其特征在于，包括：\n' + input,
          '2. 根据权利要求1所述的方法，还包括...'
        ],
        description: '本发明提供了一种创新的解决方案，通过...' + input,
        suggestions: [
          { type: 'warning', text: '建议在权利要求中增加具体的技术特征' },
          { type: 'info', text: '可以考虑增加从属权利要求以扩大保护范围' }
        ]
      });
    }, 2000);
  });
};

// 模拟专利合规性检查
export const checkPatentCompliance = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        issues: [
          { type: 'error', text: '权利要求中缺少必要的技术特征' },
          { type: 'warning', text: '说明书中的技术术语不统一' }
        ],
        suggestions: [
          { type: 'info', text: '建议参考GB/T 39218-2020标准修改用语' },
          { type: 'success', text: '符合专利法第二十六条的要求' }
        ]
      });
    }, 1500);
  });
};

// 模拟专利设卡分析
export const analyzePatentBarrier = (technology) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        barriers: [
          {
            title: '核心技术节点',
            points: [
              '数据处理方法',
              '系统架构设计',
              '用户交互方式'
            ]
          },
          {
            title: '建议布局方向',
            points: [
              '算法优化',
              '数据结构设计',
              '接口封装'
            ]
          }
        ],
        risks: [
          {
            title: 'CN123456 - 可能存在侵权风险',
            similarity: 0.85,
            suggestion: '建议进行规避设计'
          }
        ]
      });
    }, 2000);
  });
}; 