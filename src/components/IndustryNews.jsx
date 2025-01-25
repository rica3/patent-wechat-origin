import React, { useState, useEffect } from 'react';
import { Card, Tabs, List, Tag, Spin, Empty, message } from 'antd';
import styled from 'styled-components';
import { fetchNewsData } from '../services/newsService';

const NewsContainer = styled.div`
  .ant-card {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`;

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav::before {
    border-bottom: 2px solid #1B4B79; // 宝石蓝
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #FF8C00; // 爱马仕橙
  }
  .ant-tabs-ink-bar {
    background: #FF8C00;
  }
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 40px 0;
`;

const IndustryNews = () => {
  const [newsData, setNewsData] = useState({
    policies: [],
    market: [],
    competitors: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNewsData = async () => {
      try {
        setLoading(true);
        const data = await fetchNewsData();
        setNewsData(data);
      } catch (error) {
        message.error('获取新闻数据失败，请稍后重试');
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNewsData();
  }, []);

  const categories = [
    { key: 'policies', tab: '政策动态', color: '#1B4B79' },
    { key: 'market', tab: '市场动态', color: '#FF8C00' },
    { key: 'competitors', tab: '竞品动向', color: '#4B9CD3' }
  ];

  if (loading) {
    return (
      <NewsContainer>
        <Card title="行业资讯" bordered={false}>
          <LoadingContainer>
            <Spin size="large" />
          </LoadingContainer>
        </Card>
      </NewsContainer>
    );
  }

  return (
    <NewsContainer>
      <Card title="行业资讯" bordered={false}>
        <StyledTabs defaultActiveKey="policies">
          {categories.map(category => (
            <Tabs.TabPane key={category.key} tab={category.tab}>
              <List
                itemLayout="vertical"
                dataSource={newsData[category.key]}
                locale={{ emptyText: <Empty description="暂无数据" /> }}
                renderItem={item => (
                  <List.Item
                    key={item.id}
                    extra={
                      <Tag color={category.color}>
                        {category.tab}
                      </Tag>
                    }
                  >
                    <List.Item.Meta
                      title={<a href="#">{item.title}</a>}
                      description={
                        <div>
                          <div>{item.summary}</div>
                          <div style={{ marginTop: 8, color: '#888' }}>
                            {item.date} · {item.source}
                          </div>
                        </div>
                      }
                    />
                    <div>{item.content}</div>
                  </List.Item>
                )}
              />
            </Tabs.TabPane>
          ))}
        </StyledTabs>
      </Card>
    </NewsContainer>
  );
};

export default IndustryNews; 