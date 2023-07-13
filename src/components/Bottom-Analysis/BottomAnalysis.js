import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './BottomAnalysis.css';

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
    <div>
      <Container fluid className="b-analysis ">
        <Row className="justify-content-md-center b-analysis-row ">
          {analysis.map(({ category, value }) => (
            <Col key={category} className="b-analysis-col bgcolor">
              <span className="b-value bgcolor">{value}</span>
              <span className="b-category bgcolor">{category}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BottomAnalysis;
