import { useState } from 'react';
import BottomAnalysis from '../Bottom-Analysis/BottomAnalysis';
import TextBox from '../TextBox/TextBox';
import TopAnalysis from '../Top-Analysis/TopAnalysis';

const Analysis = () => {
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <>
      <TopAnalysis text={text} />
      <TextBox onTextChange={handleTextChange} />
      <BottomAnalysis text={text} />
    </>
  );
};

export default Analysis;
