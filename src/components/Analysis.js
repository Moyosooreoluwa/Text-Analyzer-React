import { useState } from 'react';
import BottomAnalysis from './BottomAnalysis';
import TextBox from './TextBox';
import TopAnalysis from './TopAnalysis';

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
