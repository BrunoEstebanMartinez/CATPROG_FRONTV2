import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

import config from '../config/index.json';



export const MainHero = () => {
  const size = useWindowSize();
  const { mainHero } = config;
  return (
    <main className={`mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-18 ${size.width <= 400 ? "w-5/6" : ""}`}>
      <div className="sm:text-center lg:text-left">
        <h1 className="grid text-3xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
          <span className="block text-[3rem]">Quejas y Denuncias<small className='block text-[4rem] text-colorPrimario'>Sanitarias</small></span>{' '}
          {/* <span className={`block text-colorPrimario text-2xl xl:inline`}> */}
          {/* <span className={`block text-[#FA3C8B] xl:inline`}>
          <span className={`block text-[#F43D99] xl:inline`}>
          <span className={`block text-[#FA6FB8] xl:inline`}>
          <span className={`block text-[#D14385] xl:inline`}> */}
            {/* {mainHero.subtitle} */}
          {/* </span> */}
        </h1>
        <p className={`text-justify mt-3 text-md text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0 ${size.width <= 400 ? "pr-6" : "pr-2"}`}>
          {mainHero.description}
        </p>
        <p className={`text-justify mt-3 text-md text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0 ${size.width <= 400 ? "pr-6" : "pr-2"}`}>
          {mainHero.secondDescription}
        </p>
        {/* <p className={`mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ${size.width <= 400 ? "pr-6" : "pr-2"}`}>
          {mainHero.thirdDescription}
        </p> */}
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          {/* <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-[#8A2036] hover:bg-[#7C1D31] hover:text-white md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div> */}
          {/* <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-[#BC955B] text-[#BC955B] bg-background hover:bg-[#BC955B] hover:text-white md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default MainHero;
