import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="footer-section">
      <Row>
        <Col md={4} className="about-us">
          <h3 className="h3 text-center py-4">About Us</h3>
          <p className="p-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            dolorem adipisci quia debitis corporis omnis quidem temporibus,
            culpa, non illum, voluptas eveniet ab voluptatum! Quos id
            reprehenderit exercitationem enim dolore.
          </p>
          <p className="p-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam, itaque.
          </p>
        </Col>
        <Col md={4}>
          <h3 className="h3 text-center py-4">Our Partners</h3>
        </Col>
        <Col md={4}>
          <h3 className="h3 text-center py-4">Our Services</h3>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
            <li>Service 6</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
