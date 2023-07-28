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
    // Split the text into individual words by whitespace (space, tab, newline, etc.)
    const words = text.split(/\s+/);

    // Initialize variables to keep track of the longest word and its length
    let longestWord = '';
    let longestLength = 0;

    // Iterate through each word
    for (const word of words) {
      // Remove any non-alphanumeric characters (optional step)
      const cleanedWord = word.replace(/[^A-Za-z0-9]/g, '');

      // Get the length of the cleaned word
      const wordLength = cleanedWord.length;

      // Check if the current word is longer than the previously longest word
      if (wordLength > longestLength) {
        longestWord = cleanedWord;
        longestLength = wordLength;
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
