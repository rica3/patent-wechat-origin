import IndustryNews from '../components/IndustryNews';

const Home = () => {
  return (
    <Layout>
      <Content>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <IndustryNews />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home; 