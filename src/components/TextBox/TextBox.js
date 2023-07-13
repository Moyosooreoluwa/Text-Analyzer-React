import './TextBox.css';

import Form from 'react-bootstrap/Form';

const TextBox = () => {
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
            />
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default TextBox;
