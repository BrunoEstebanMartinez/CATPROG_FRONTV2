import React from 'react';

import config from '../config/index.json';

export const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-3/4">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-screen"
        src={mainHero.img}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
