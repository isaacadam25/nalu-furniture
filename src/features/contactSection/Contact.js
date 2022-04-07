import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={7}>
          <h6 className="display-6 text-center py-2">Get In Touch With Us</h6>
          <p className="text-muted text-center font-monospace">
            Some Description
          </p>
        </Col>
        <Col md={5}>
          <h5>Hello 2</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
