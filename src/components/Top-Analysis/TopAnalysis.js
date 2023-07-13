import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TopAnalysis.css';

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
      <Container fluid className="analysis ">
        <Row className="justify-content-md-center analysis-row ">
          {analysis.map(({ category, value }) => (
            <Col key={category} className="analysis-col bgcolor">
              <span className="category bgcolor">{category}</span>
              <span className="value bgcolor">{value}</span>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TopAnalysis;
