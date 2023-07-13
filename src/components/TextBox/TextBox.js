import { useState } from 'react';
import './TextBox.css';

import Form from 'react-bootstrap/Form';

const TextBox = ({ onTextChange }) => {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <>
      <div className="textbox bg-tb py-5">
        <Form className="textbox-area bg-tb">
          <Form.Group controlId="textbox-area bg-tb">
            <Form.Control
              type="text"
              as="textarea"
              rows={15}
              placeholder="Paste your text here."
              color="red"
              value={text}
              onChange={handleTextChange}
            />
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default TextBox;
