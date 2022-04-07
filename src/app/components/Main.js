import React from 'react';
import Contact from '../../features/contactSection/Contact';

/* Component Imports */
import CustomDesigns from '../../features/customDesigns/CustomDesigns';
import FeaturedProducts from '../../features/featuredProducts/FeaturedProducts';
import InteriorDesign from '../../features/interiorDesign/InteriorDesign';
import ImageCarousel from './ImageCarousel';

const Main = () => {
  return (
    <div className="main">
      <ImageCarousel />
      <FeaturedProducts />
      <CustomDesigns />
      <InteriorDesign />
      <Contact />
    </div>
  );
};

export default Main;
