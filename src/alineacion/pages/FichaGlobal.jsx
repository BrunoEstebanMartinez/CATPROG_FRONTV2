import {React, useEffect, useState} from "react";
import { useLocation, Routes, Route, useNavigate } from "react-router-dom";
import { FichaRegPrograma } from "./FichaRegPrograma";
import { FichaObjectivo } from "./FichaObjetivo";
import { useDispatch, useSelector } from "react-redux";
import { getDetalle } from "../../store";


export const FichaGlobal = () => {

    const { state, location } = useLocation();
    const {token} = useSelector(state => state.auth);
    const {statusInfoProgram, 
      grupo_desc, 
      depen_id, 
      depen_id2, 
      depen_id3, 
      responsable, 
      unidad_opera, 
      clasificgob_id,
      clasificgob_desc,
      prioridad_id,
      prioridad_desc,
      prog_tipo,
      prog_status1,
      prog_status2,
      prog_id,
      prog_desc,
      prog_verti} = useSelector(state => state.infoprograma);

    const [alocalInfo, setLocalInfo] = useState(false);
    const navigate  = useNavigate();
    const dispatch = useDispatch();

    const info = localStorage.getItem("isObjectInfo");

    console.log(info + JSON.parse(info)[0] + JSON.parse(info)[1])


    useEffect(() => {

      if((JSON.parse(info)[0] && JSON.parse(info)[1]) != null){
        dispatch(getDetalle('get-detalle-programas', JSON.parse(info)[1],JSON.parse(info)[0], token));
      }else{
        setLocalInfo(true);
      }

    }, [JSON.parse(info)[0], JSON.parse(info)[1], token]);

   


    return (
    
        <>

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
                      { statusInfoProgram != 'full' ? 
                              <div role="status" class="animate-pulse">
                              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                              <div class="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
                              <div class="flex items-center justify-left mt-4">
                                  <div class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
                                  <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                              </div>
                              <span class="sr-only">Loading...</span>
                          </div> 
                      :
                      
                      <nav className="flex" aria-label="Breadcrumb">
                          <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                  <span className="ml-2 inline-flex items-center text-base font-bold text-[#BA9257]">
                                  {`${prog_id}`}
                                  </span>
                            </li>
                            <li className="inline-flex items-center">
                                  <span className="ml-2 inline-flex items-center text-sm font-normal">
                                  {`${prog_desc}`}
                                  </span>
                            </li>
                            <li className="inline-flex items-center">
                                  <span className="ml-2 inline-flex items-center text-sm font-normal">
                                  {`${prog_verti === null ? 'SIN VERTIENTE' : prog_verti}`}
                                  </span>
                            </li>
                          </ol>
                        </nav>
                        }
                    </div>

          

                    <div className = 'bg-white p-4 drop-shadow-2xl rounded-lg'>

                      {statusInfoProgram != 'full' ? 
                      
                      <div role="status" class="max-w-sm animate-pulse">
                          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                          <span class="sr-only">Loading...</span>
                      </div> : 
                      <div className = 'grid grid-cols-12 gap-4 flex items-center'>
                          <div className = 'col-span-3 border border-t-[#BB9150] border-l-[#921E29] justify-items-start'><p className = 'text-xs font-bold'>Tipo Responsable:</p></div>
                          <div className = 'col-span-3 border border-b-[#BB9150] border-r-[#921E29] justify-items-start'><p className = 'text-xs font-normal'>{`${clasificgob_desc === null ? 'SIN ESPECIFICAR' : clasificgob_desc}`}</p></div>
                          <div className = 'col-span-3 border border-t-[#BB9150] border-l-[#921E29] justify-items-start'><p className = 'text-xs font-bold'>Grupo responsable:</p></div>
                          <div className = 'col-span-3 border border-b-[#BB9150] border-r-[#921E29] justify-items-start'><p className = 'text-xs font-normal'>{`${grupo_desc}`}</p></div>
                          <div className = 'col-span-3 border border-t-[#BB9150] border-l-[#921E29] justify-items-start'><p className = 'text-xs font-bold'>Dependencia y/o organismo auxiliar:</p></div>
                          <div className = 'col-span-3 border border-b-[#BB9150] border-r-[#921E29] justify-items-start'><p className = 'text-xs font-normal'>{`${responsable === null ? 'SIN ESPECIFICAR' : responsable}`}</p></div>
                          <div className = 'col-span-3 border border-t-[#BB9150] border-l-[#921E29] justify-items-start'><p className = 'text-xs font-bold'>Unidad operativa:</p></div>
                          <div className = 'col-span-3 border border-b-[#BB9150] border-r-[#921E29] justify-items-start'><p className = 'text-xs font-normal'>{`${unidad_opera === null ? 'SIN ESPECIFICAR' : unidad_opera}`}</p></div>
                          <div className = 'col-span-3 border border-t-[#BB9150] border-l-[#921E29] justify-items-start'><p className = 'text-xs font-bold'>Tipo:</p></div>
                          <div className = 'col-span-3 border border-b-[#BB9150] border-r-[#921E29] justify-items-start'><p className = 'text-xs font-normal'>{`${prog_tipo === 'P' ? 'PROGRAMA' : 'ACCIÓN' }`}</p></div>
                          <div className = 'col-span-3'></div>
                          <div className = 'col-span-3'></div>

                      </div>
                      }
                        
                    </div>
                    
                    

                    <div className = "p-4 flex justify-center sticky top-0">
                        <div class="inline-flex items-center rounded-md shadow-sm" role="group">
                            <button type="button" class="inline-flex items-center px-3 py-2 text-xs font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                disabled = {alocalInfo}
                                onClick={() => {navigate('programa')}}>
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                                Programa
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                              disabled = {alocalInfo}
                              onClick={() => {navigate('objetivo')}}>
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                                </svg>
                                Objetivos
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                disabled = {alocalInfo}>
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                                </svg>
                                Presupuesto
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                disabled = {alocalInfo}>
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                                </svg>
                                Beneficios
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                 disabled = {alocalInfo}>
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                                </svg>
                                Financiamiento
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-transparent border border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                disabled = {alocalInfo}>
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                                </svg>
                                Distribución
                            </button>
                            <button type="button" class="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                disabled = {alocalInfo}>
                                <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                                </svg>
                                Diagnóstico
                            </button>
                        </div>
                    </div>

                    <div class = 'bg-white drop-shadow-2xl'>
                        <Routes>
                            <Route path = 'programa' element = {<FichaRegPrograma  />}/>
                            <Route path = 'objetivo' element = {<FichaObjectivo    />}/>

                        </Routes>
                    </div>

                </div>

            </div>

        </div>
        </>
);

}




