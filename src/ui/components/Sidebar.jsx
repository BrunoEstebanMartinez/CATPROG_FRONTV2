import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import LogoIsem from '../../images/logo-bienestar_blank.png';
import { startLogout } from '../../store/auth';
// import { onLogout } from '../functions/onLogout';

function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpe(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);


  const { acceso_tipo } = useSelector( state => state.auth );
  const { firstTime } = useSelector( state => state.auth );


  /*
  let stateUser = false;  
  { acceso_tipo != 'PG' ?  stateUser =  true : stateUser =  false  }
  
  let showModulesProvilges = [ {
                                  ADMINISTRACION:"SA",
                                  ALINEACION:"SA"
                              },
                              {
                                 ADMINISTRACION:"AD",
                                 ALINEACION:"AD"
                              },
                                 {ADMINISTRACION: "",
                                  ALINEACION: "PG"
                              } ];
  */



  
    

  const dispatch = useDispatch();
  const onLogout = () => {
  
    return dispatch( startLogout() );
    
  }
  // console.log(acceso_tipo);
  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-fuchsia-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 md:w-20  sm:sidebar-expanded:!w-64 lg:sidebar-expanded:!w-64 sm:!w-20  shrink-0 bg-gradient-to-tl from-colorPrimario to-red-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 sm:pt-5">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <img className="w-48 sm:ml-0 ml-4" src={LogoIsem} alt="Bienestar"/>
          </NavLink>
        </div>
          <div className="space-y-8">
            {/* Pages group */}
            <div>
              <h3 className="text-xs uppercase text-slate-200 font-semibold pl-3">
				<span className="hidden lg:block lg:sidebar-expanded:hidden sm:hidden text-center w-6" aria-hidden="true">
                  •••
                </span>
                <span className="lg:hidden lg:sidebar-expanded:block sm:block">MENÚ</span>
              </h3>
            

          
              <ul className='mt-3'>
          
              {
                acceso_tipo != 'PG' ?
                <SidebarLinkGroup  activecondition={pathname === '/' || pathname.includes('administracion')}> 
              
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <a
                          href="#0"
                          className={`block truncate transition duration-150 ${
                            pathname === '/' || pathname.includes('administracion') ? 'text-slate-100 hover:text-white' : 'text-slate-300 hover:text-slate-100'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                          }}
                        >

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window" viewBox="0 0 16 16">
                                <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z"/>
                              </svg>
                              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 sm:opacity-100 duration-200">
                                Administración
                              </span>
                            </div>
                            {/* Icon */}
                            <div className="flex shrink-0 ml-2">
                              <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-100 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                              </svg>
                            </div>
                          </div>
                        </a>
                        <div className="lg:hidden lg:sidebar-expanded:block sm:block">
                          <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          
                            <>
                            <li className="mb-1 last:mb-0">
                              <NavLink
                                end
                                to="/main/adminitracion/catalogos"
                                className={({ isActive }) =>
                                  'block transition duration-150 truncate ' + (isActive ? 'text-white' : 'text-slate-200 hover:text-white')
                                }
                              >
                                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 sm:opacity-100 duration-200">
                                  Administración
                                </span>
                              </NavLink>
                            </li>
                            <li className="mb-1 last:mb-0">
                              <NavLink
                                end
                                to="/main/catalogo/catalogos/listaprocesos"
                                className={({ isActive }) =>
                                  'block transition duration-150 truncate ' + (isActive ? 'text-white' : 'text-slate-200 hover:text-white')
                                }
                              >
                                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 sm:opacity-100 duration-200">
                                  Catálogos
                                </span>
                              </NavLink>
                            </li>
                            </>
                          
                          </ul>
                        </div>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>
                : null
                }


                { acceso_tipo != 'AD' ? 
                
                <SidebarLinkGroup  activecondition={pathname === '/' || pathname.includes('alineacion')}>
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <a
                          href="#0"
                          className={`block truncate transition duration-150 ${
                            pathname === '/' || pathname.includes('alineacion') ? 'text-slate-100 hover:text-white' : 'text-slate-300 hover:text-slate-100'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                              </svg>
                              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 sm:opacity-100 duration-200">
                                 Alineación
                              </span>
                            </div>
                            {/* Icon */}
                            <div className="flex shrink-0 ml-2">
                              <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-100 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                              </svg>
                            </div>
                          </div>
                        </a>
                        <div className="lg:hidden lg:sidebar-expanded:block sm:block">
                          <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                        
                            
                            <li className="mb-1 last:mb-0">
                              <NavLink
                                end
                                to="/main/alineacion/fichaprograma"
                                className={
                                  'block transition duration-150 truncate ' + ((pathname.includes('/alineacion/fichaprograma')) ? 'text-white' : 'text-slate-300 hover:text-white')
                                }
                              >
                                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 sm:opacity-100 duration-200">
                                  Ficha del programa
                                </span>
                              </NavLink>
                            </li>
                           
                          </ul>
                        </div>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup> : null
                }
              </ul>
            </div>
          </div>
                

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex sm:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
