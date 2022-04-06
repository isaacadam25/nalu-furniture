import React from 'react';

/* Component Imports */
import FeaturedProducts from '../../features/featuredProducts/FeaturedProducts';
import ImageCarousel from './ImageCarousel';

const Main = () => {
  return (
    <div className="main">
      <ImageCarousel />
      <FeaturedProducts />
    </div>
  );
};

export default Main;
