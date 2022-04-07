import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <div className="contact-form py-3">
      <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="07xxxxxxxxxx" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button variant="primary" className="float-end my-2 mx-2">
        Submit
      </Button>
    </div>
  );
};

export default ContactForm;
