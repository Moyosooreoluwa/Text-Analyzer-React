import './TopAnalysis.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TopAnalysis = ({ text }) => {
  const countWords = () => {
    // Remove leading/trailing spaces and multiple consecutive spaces
    const trimmedText = text.trim().replace(/\s+/g, ' ');

    // Split the trimmed text into words
    const words = trimmedText.split(' ');

    // Filter out empty words
    const filteredWords = words.filter((word) => word !== '');

    // Return the count of filtered words
    return filteredWords.length;
  };

  function countCharacters() {
    // Remove spaces to count non-whitespace characters only
    const trimmedText = text.replace(/\s/g, '');

    // Return the count of characters
    return trimmedText.length;
  }

  function countSentences() {
    // Split the text into sentences using punctuation marks as delimiters
    const sentences = text.split(/[.!?]+/);

    // Filter out empty sentences
    const filteredSentences = sentences.filter(
      (sentence) => sentence.trim() !== ''
    );

    // Return the lenght of filtered sentences
    return filteredSentences.length;
  }

  function countParagraphs() {
    // Split the text into paragraphs using newline characters as delimiters
    const paragraphs = text.split(/\n+/);

    // Filter out empty paragraphs
    const filteredParagraphs = paragraphs.filter(
      (paragraph) => paragraph.trim() !== ''
    );

    // Return the length of filtered paragraphs
    return filteredParagraphs.length;
  }

  const analysis = [
    {
      category: 'Words',
      value: countWords(),
    },
    {
      category: 'Characters',
      value: countCharacters(),
    },
    {
      category: 'Sentences',
      value: countSentences(),
    },
    {
      category: 'Paragraphs ',
      value: countParagraphs(),
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
