import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import './homepage.css';

const { Title, Text } = Typography;
const { Meta } = Card;

const CohortCard = ({ image, number, title }) => (
  <Card
    hoverable
    style={{ width: 240, backgroundColor: '#4844ec', borderRadius: 15 }}
    cover={<img alt={title} src={image} />}
  >
    <Meta
      title={<Text strong style={{ color: 'white' }}>{number}</Text>}
      description={<Text style={{ color: 'white' }}>{title}</Text>}
    />
  </Card>
);


const cohorts = [
  {
    number: '9.1',
    title: 'Full Stack Development',
    image: '/midjourney/9.1.png',
  },
  {
    number: '9.2',
    title: 'Full Stack Development',
    image: '/midjourney/9.2.png',
  },
  {
    number: '9.3',
    title: 'Full Stack Development',
    image: '/midjourney/9.3.png',
  },
  {
    number: '9.4',
    title: 'Full Stack Development',
    image: '/midjourney/9.4.png',
  },
];

const CohortGrid = () => (
  <Row gutter={[16, 16]}>
    {cohorts.map((cohort) => (
      <Col key={cohort.number} span={6}>
        <CohortCard {...cohort} />
      </Col>
    ))}
  </Row>
);


const HomePage = () => (
  <div className="App" style={{ backgroundColor: 'black', minHeight: '100vh', padding: '50px' }}>
    <Title style={{ color: 'white' }}>Pursuit</Title>
    <Title level={2} style={{ color: 'white' }}>
      Your Personal Coding Tutor
    </Title>
    <Title level={4} style={{ color: 'white' }}>
      Choose Your Cohort
    </Title>
    <CohortGrid />
  </div>
);

export default HomePage;
