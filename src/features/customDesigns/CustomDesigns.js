import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/* Component Imports */
import ProductCarousel from '../../app/components/ProductCarousel';

const CustomDesigns = () => {
  return (
    <Container fluid>
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
            <h3>Design Your</h3>
            <h3>Favorite Product</h3>
            <h3>With Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              ipsa, libero laudantium odio earum asperiores obcaecati sapiente
              nihil ab adipisci!
            </p>
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
