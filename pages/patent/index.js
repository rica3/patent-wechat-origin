import { 
  generatePatentDraft, 
  checkPatentCompliance,
  analyzePatentBarrier 
} from '../../services/patentGenerateService';

Page({
  data: {
    activeTab: 'generate',
    techDescription: '',
    technology: '',
    fileList: [],
    generating: false,
    analyzing: false,
    draftResult: null,
    barrierResult: null
  },

  onTabChange(event) {
    this.setData({
      activeTab: event.detail.name
    });
  },

  afterRead(event) {
    const { file } = event.detail;
    const { fileList = [] } = this.data;
    fileList.push({ ...file, status: 'done' });
    this.setData({ fileList });
  },

  onDelete(event) {
    const { fileList } = this.data;
    fileList.splice(event.detail.index, 1);
    this.setData({ fileList });
  },

  async onGenerate() {
    if (!this.data.techDescription) {
      wx.showToast({
        title: '请输入技术描述',
        icon: 'none'
      });
      return;
    }

    try {
      this.setData({ generating: true });
      
      // 生成专利草稿
      const draftResult = await generatePatentDraft(this.data.techDescription);
      
      // 检查合规性
      const compliance = await checkPatentCompliance(draftResult.description);
      
      // 合并建议
      draftResult.suggestions = [
        ...draftResult.suggestions,
        ...compliance.suggestions,
        ...compliance.issues.map(issue => ({
          type: issue.type,
          text: issue.text
        }))
      ];

      this.setData({ 
        draftResult,
        generating: false
      });
    } catch (error) {
      console.error('生成失败:', error);
      wx.showToast({
        title: '生成失败',
        icon: 'none'
      });
      this.setData({ generating: false });
    }
  },

  async onAnalyze() {
    if (!this.data.technology) {
      wx.showToast({
        title: '请输入技术领域',
        icon: 'none'
      });
      return;
    }

    try {
      this.setData({ analyzing: true });
      const barrierResult = await analyzePatentBarrier(this.data.technology);
      this.setData({ 
        barrierResult,
        analyzing: false
      });
    } catch (error) {
      console.error('分析失败:', error);
      wx.showToast({
        title: '分析失败',
        icon: 'none'
      });
      this.setData({ analyzing: false });
    }
  }
}); 