import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const InteriorDesign = () => {
  return (
    <Container>
      <Row>
        <Col className="py-2">
          <h4 className="display-4 text-center py-1">Interior Designs</h4>
          <p className="text-muted text-center font-monospace">
            Some Description
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div className="image-container">
            <img src="/open-office.jpeg" alt="" />
          </div>
        </Col>
        <Col md={4}>
          <div className="image-container">
            <img src="/interior-design.jpeg" alt="" />
          </div>
        </Col>
        <Col md={4}>
          <div className="image-container">
            <img src="/open-office.jpeg" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InteriorDesign;
