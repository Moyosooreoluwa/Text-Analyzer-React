import './BottomAnalysis.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BottomAnalysis = ({ text }) => {
  function calculateReadingTime(wordsPerMinute = 200) {
    let readingTimeMinutes = 0;
    const words = text.trim().split(/\s+/).length;
    if (text === '') {
      readingTimeMinutes = '-';
    } else {
      readingTimeMinutes = '~' + Math.ceil(words / wordsPerMinute) + ' min';
    }

    return readingTimeMinutes;
  }

  function getLongestWord() {
    // Removing punctuation marks and splitting the text into an array of words
    const words = text.replace(/[^\w\s]/g, '').split(/\s+/);

    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      } else {
        longestWord = '-';
      }
    }

    return longestWord;
  }

  const analysis = [
    {
      category: 'Avg. reading time',
      value: calculateReadingTime(),
    },
    {
      category: 'Longest word',
      value: getLongestWord(),
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
