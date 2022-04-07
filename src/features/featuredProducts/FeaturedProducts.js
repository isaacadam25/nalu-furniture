import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/* component imports */
import ProductCard from '../../app/components/ProductCard';

const FeaturedProducts = () => {
  return (
    <div className="py-2">
      <h4 className="display-4 text-center py-1">Featured Products</h4>
      <p className="text-muted text-center font-monospace">Some Description</p>
      <Container>
        <Row>
          <Col md={3} className="rounded-top mt-3">
            <ProductCard />
          </Col>
          <Col md={3} className="rounded-top mt-3">
            <ProductCard />
          </Col>
          <Col md={3} className="rounded-top mt-3">
            <ProductCard />
          </Col>
          <Col md={3} className="rounded-top mt-3">
            <ProductCard />
          </Col>
          <Col md={3} className="rounded-top mt-3">
            <ProductCard />
          </Col>
          <Col md={3} className="rounded-top mt-3">
            <ProductCard />
          </Col>
          <Col md={3} className="rounded-top mt-3">
            <ProductCard />
          </Col>
          <Col md={3} className="rounded-top mt-3">
            <ProductCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
