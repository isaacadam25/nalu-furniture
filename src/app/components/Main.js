import React from 'react';

/* Component Imports */
import CustomDesigns from '../../features/customDesigns/CustomDesigns';
import FeaturedProducts from '../../features/featuredProducts/FeaturedProducts';
import ImageCarousel from './ImageCarousel';

const Main = () => {
  return (
    <div className="main">
      <ImageCarousel />
      <FeaturedProducts />
      <CustomDesigns />
    </div>
  );
};

export default Main;
