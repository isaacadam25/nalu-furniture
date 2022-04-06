import React from 'react';

const TopBar = () => {
  return (
    <div className="top-bar px-5 d-none d-md-block">
      <div className="top-bar-left float-start">
        <i className="fa fa-map-marker pe-2" />
        <span className="text-white">Tabata Aroma</span>
      </div>
      <div className="top-bar-right float-end">
        <span>
          <i className="fa fa-phone pe-2" />
          <a href="tel:0718793810" className="pe-2 text-white">
            +255 718793810
          </a>
        </span>
        <span>
          <i className="fa fa-envelope pe-2 " />
          <a href="mailto:isaacadam04@gmail.com" className="text-white">
            info@nalugeneral.co.tz
          </a>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
