import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = () => {
  return (
    <Card className="bg-dark product-card text-white border-0 border-bottom border-secondary border-5">
      <Card.Img src="/image1.jpg" className="product-image" alt="Card image" />
      <Card.ImgOverlay className="d-flex justify-content-center flex-wrap">
        <div className="product-description d-flex flex-column align-items-center">
          <h5 className="h5 text-center product-title">Sofa Bed</h5>
          <a href="#" className="product-link d-block px-5 py-1">
            View
          </a>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ProductCard;
