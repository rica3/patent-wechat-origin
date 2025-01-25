export const mockPatents = [
  {
    id: 'P001',
    title: '一种基于深度学习的图像识别方法',
    abstract: '本发明公开了一种基于深度学习的图像识别方法，包括图像预处理、特征提取、模型训练等步骤...',
    applicant: '某科技有限公司',
    inventors: ['张三', '李四'],
    applicationDate: '2024-01-15',
    publicationDate: '2024-03-01',
    legalStatus: '实质审查',
    ipcClass: ['G06K 9/00', 'G06N 3/08'],
    claims: [
      '1. 一种基于深度学习的图像识别方法，其特征在于，包括以下步骤：...',
      '2. 根据权利要求1所述的方法，还包括...'
    ],
    citedPatents: ['CN123456', 'US789012'],
    similarityScore: 0.95
  },
  {
    id: 'P002',
    title: '一种基于大语言模型的专利分析方法',
    abstract: '本发明提供了一种基于大语言模型的专利分析方法，通过对专利文本进行语义理解和特征提取...',
    applicant: '智慧专利科技公司',
    inventors: ['王五', '赵六'],
    applicationDate: '2024-02-20',
    publicationDate: '2024-03-15',
    legalStatus: '已授权',
    ipcClass: ['G06F 17/27', 'G06N 3/04'],
    claims: [
      '1. 一种基于大语言模型的专利分析方法，包括以下步骤：...',
      '2. 根据权利要求1所述的方法，其中...'
    ],
    citedPatents: ['CN234567', 'EP345678'],
    similarityScore: 0.88
  },
  {
    id: 'P003',
    title: '一种专利相似度计算方法及系统',
    abstract: '本发明提供了一种专利相似度计算方法及系统，通过对专利文本进行向量化表示...',
    applicant: '创新科技有限公司',
    inventors: ['李明', '张华'],
    applicationDate: '2024-03-01',
    publicationDate: '2024-03-20',
    legalStatus: '实质审查',
    ipcClass: ['G06F 17/30', 'G06N 3/12'],
    claims: [
      '1. 一种专利相似度计算方法，其特征在于，包括：...',
      '2. 根据权利要求1所述的方法，其中...'
    ],
    citedPatents: ['CN345678', 'US456789'],
    similarityScore: 0.92
  }
];

export const legalStatusOptions = [
  { text: '全部状态', value: '' },
  { text: '实质审查', value: '实质审查' },
  { text: '已授权', value: '已授权' },
  { text: '驳回', value: '驳回' },
  { text: '无效', value: '无效' }
];

export const ipcClassOptions = [
  { text: '全部领域', value: '' },
  { text: 'G06K - 数据识别', value: 'G06K' },
  { text: 'G06N - 计算机系统', value: 'G06N' },
  { text: 'H04L - 数字信息传输', value: 'H04L' }
]; 