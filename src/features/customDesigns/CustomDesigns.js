import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/* Component Imports */
import ProductCarousel from '../../app/components/ProductCarousel';

const CustomDesigns = () => {
  return (
    <Container>
      <Row>
        <Col className="py-3">
          <h4 className="display-4 text-center py-1">Custom Designs</h4>
          <p className="text-muted text-center py-1 font-monospace">
            Some Description
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="d-block d-md-block d-lg-block d-none">
          <div className="right-text p-4">
            <p>Give Us Your Design</p>
          </div>
        </Col>
        <Col md={9}>
          <div className="product-carousel">
            <ProductCarousel />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomDesigns;
