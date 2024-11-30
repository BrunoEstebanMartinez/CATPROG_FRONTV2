import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {HiMenu, HiX  } from 'react-icons/hi'; 
import { Link } from 'react-scroll';

import config from '../config/index.json';

export const Header = () => {
  const { navigation, company, callToAction } = config;
  const { name: companyName, logo, logo2, logo3, logo4 } = company;

  const onDownload = ( ) =>{
    // console.log('Descargar');
        const pdfUrl = "1.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Aviso de protección a la información.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }

  return (
    <>
      <svg
        className={`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2 text-white `}
        fill="#FFFFFF"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon className='bg-transparent' points="50,0 100,0 50,100 0,100" />
      </svg>

      <Popover>
      <div className="relative pt-6 px-3 sm:px-6 lg:px-5">
          <nav
            className="relative items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className=" items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">

              <a href="#">
                  <span className="sr-only">{companyName}</span>
                  <img alt="logo" className="h-9 w-full sm:h-12" src={logo2} />
                </a>
                {/* <a href="#">
                  <span className="sr-only">{companyName}</span>
                  <img alt="logo" className="h-9 w-auto sm:h-12" src={logo4} />
                </a> */}

                {/* <a href="#">
                  <span className="sr-only">{companyName}</span>
                  <img alt="logo" className="h-16 w-auto sm:h-16" src={logo2} />
                </a>                 */}

                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Open main menu</span>
                    <HiMenu className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:mt-5 md:pr-4 md:space-x-8 cursor-pointer">
            <Link
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  key={666}
                  onClick={() => { onDownload() }}
                  className={`font-medium text-red-500 hover:text-red-700`}
                >
                  Aviso
                </Link>
              {navigation.map((item, index) => (
                index > 0 ?
                <Link
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  key={item.name}
                  to={item.href}
                  className={`font-medium ${item.name == 'Registrar' ? 
                  'text-colorAuxiliar hover:text-colorPrimario' : (
                    item.name == 'Consultar' ? 'text-colorTerciario hover:text-colorSecundario'
                    : 'text-gray-500 hover:text-gray-900')} `}
                >
                  {item.name}
                </Link>
                 : null
              ))}
              {/* <a
                href="#"
                className={`font-medium text-primary hover:text-secondary`}
              >
                Ayuda
              </a> */}
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-white"
          >
            <div
              className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                {/* <div>
                  <img className="h-8 w-auto" src={logo} alt="" />
                </div> */}
                <div className="-mr-2">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Close main menu</span>
                    <HiX className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                {navigation.map((item) => (
                  <Link
                    spy={true}
                    active="active"
                    smooth={true}
                    duration={1000}
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {/* <a
                href={callToAction.href}
                className={`block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100`}
              >
                {callToAction.text}
              </a> */}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

// export default Menu;
