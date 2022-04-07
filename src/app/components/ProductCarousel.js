import React from 'react';
import Carousel from 'react-elastic-carousel';

/* Component imports*/

const ProductCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <Carousel
      breakPoints={breakPoints}
      enableAutoPlay={true}
      focusOnSelect={true}
      itemsToShow={3}
      pagination={false}
    >
      <img src="/image1.jpg" width={220} height={200} alt="avatar" />
      <img src="/image1.jpg" width={220} height={200} alt="avatar" />
      <img src="/image1.jpg" width={220} height={200} alt="avatar" />
      <img src="/image1.jpg" width={220} height={200} alt="avatar" />
      <img src="/image1.jpg" width={220} height={200} alt="avatar" />
    </Carousel>
  );
};

export default ProductCarousel;
