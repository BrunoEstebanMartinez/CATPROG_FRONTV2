import {React, useEffect, useState} from "react";
import { useLocation, Routes, Route, useNavigate } from "react-router-dom";
import { FichaRegPrograma } from "./FichaRegPrograma";
import { FichaObjectivo } from "./FichaObjetivo";

export const FichaGlobal = () => {



    const [linked, setLinked] = useState('');
    const { state, location } = useLocation();
    const navigate  = useNavigate();

    console.log(location);
    console.log(state);
    

    return (<>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className = "bg-white p-4 rounded-lg drop-shadow-2xl">
                    <div className = 'p-4'>
                        <nav className="flex" aria-label="Breadcrumb">
                          <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                  <span className="ml-2 inline-flex items-center text-base font-medium">
                                    Alineación
                                  </span>
                            </li>
                            <li className="inline-flex items-center">
                                  <span className="ml-2 inline-flex items-center text-sm font-medium">
                                    Ficha del programa
                                  </span>
                            </li>
                          </ol>
                        </nav>
                    </div>
                </div>

            <div className = "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                <div className = "bg-white p-4 drop-shadow-2xl">

                    <div className = "p-4">
                        <nav className="flex" aria-label="Breadcrumb">
                          <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                  <span className="ml-2 inline-flex items-center text-base font-medium text-[#BA9257]">
                                    Programas del Bienestar
                                  </span>
                            </li>
                            <li className="inline-flex items-center">
                                  <span className="ml-2 inline-flex items-center text-sm font-medium">
                                    Detalle del programa
                                  </span>
                            </li>
                          </ol>
                        </nav>
                    </div>

                    <div className = "p-4">
                        <nav className="flex" aria-label="Breadcrumb">
                          <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                  <span className="ml-2 inline-flex items-center text-base font-bold text-[#BA9257]">
                                    ID
                                  </span>
                            </li>
                            <li className="inline-flex items-center">
                                  <span className="ml-2 inline-flex items-center text-sm font-normal">
                                    NOMBRE DEL PROGRAMA
                                  </span>
                            </li>
                            <li className="inline-flex items-center">
                                  <span className="ml-2 inline-flex items-center text-sm font-normal">
                                    VERTIENTE
                                  </span>
                            </li>
                          </ol>
                        </nav>
                    </div>

                    <div className = 'bg-white p-4 drop-shadow-2xl rounded-lg'>
                        <div className = 'grid grid-cols-12 gap-4'>
                                <div className = 'col-span-6'><p className = 'text-xs font-bold'>Tipo Responsable:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-normal'>Responsable:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-bold'>Grupo responsable:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-normal'>Responsable:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-bold'>Dependencia y/o organismo auxiliar:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-normal'>Responsable:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-bold'>Unidad operativa:</p></div>
                                <div className = 'col-span-6'><p className = 'text-xs font-normal'>Responsable:</p></div>
                                <div className = 'col-span-2'><p className = 'text-xs font-bold'>Tipo:</p></div>
                                <div className = ''><p className = 'text-xs font-normal'>Tipo de programa:</p></div>

                        </div>
                    </div>

                    <div className = "p-4 flex justify-center sticky top-0">
                        <div class="inline-flex items-center rounded-md shadow-sm" role="group">
                            <button type="button" class="inline-flex items-center px-3 py-2 text-xs font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                onClick={() => {navigate('programa')}}>
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                                Programa
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                              onClick={() => {navigate('objetivo')}}>
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                                </svg>
                                Objetivos
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                                </svg>
                                Proyecto presupuestal
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                                </svg>
                                Beneficios
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                                </svg>
                                Financiamiento
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                                </svg>
                                Distribución
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                                </svg>
                                Diagnóstico
                            </button>
                        </div>
                    </div>

                    <div class = 'bg-white drop-shadow-2xl'>
                        <Routes>
                            <Route path = 'programa' element = {<FichaRegPrograma />}/>
                            <Route path = 'objetivo' element = {<FichaObjectivo />}/>

                        </Routes>

                    </div>

                </div>

            </div>

        </div>


    </>);

}

