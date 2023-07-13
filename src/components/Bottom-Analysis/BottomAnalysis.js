import './BottomAnalysis.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BottomAnalysis = () => {
  const analysis = [
    {
      category: 'Avg. reading time',
      value: '-',
    },
    {
      category: 'Longest word',
      value: '-',
    },
  ];

  return (
    <>
      <Container fluid className="p-4 ">
        <Row className="justify-content-md-center b-analysis-row ">
          {analysis.map(({ category, value }) => (
            <Col key={category} className=" p-3 b-analysis-col bg-bottom">
              <span className="b-value bg-bottom">{value}</span>
              <span className="b-category bg-bottom">{category}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BottomAnalysis;
