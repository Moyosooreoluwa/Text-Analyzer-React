import './TopAnalysis.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TopAnalysis = () => {
  const analysis = [
    {
      category: 'Words',
      value: 0,
    },
    {
      category: 'Characters',
      value: 0,
    },
    {
      category: 'Sentences',
      value: 0,
    },
    {
      category: 'Paragraphs ',
      value: 0,
    },
  ];

  return (
    <div>
      <Container fluid className="p-4 mt-5 ml-5 mr-b">
        <Row className="justify-content-md-center analysis-row ">
          {analysis.map(({ category, value }) => (
            <Col key={category} className="analysis-col p-3 bg-top">
              <span className="category bg-top">{category}</span>
              <span className="value bg-top">{value}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TopAnalysis;
