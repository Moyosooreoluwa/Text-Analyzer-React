import './TextBox.css';

import Form from 'react-bootstrap/Form';

const TextBox = () => {
  return (
    <>
      <div className="textbox">
        <Form className="textbox-area">
          <Form.Group controlId="textbox-area">
            <Form.Control
              type="text"
              as="textarea"
              rows={15}
              placeholder="Paste your text here."
              color="red"
            />
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default TextBox;
