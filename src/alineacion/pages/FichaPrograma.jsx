import {useEffect, useState} from "react";
import {Navigate, Link, Route, Routes, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {FichaGlobal} from '../pages/FichaGlobal';



import { getPeriodosRed, getProgramasRed } from "../../store";


export const FichaPrograma = () => {


  const dispatch = useDispatch();
  const location = useLocation();
    const {pathname} = location;
    console.log(pathname);
  const {token} = useSelector( state => state.auth );
  const {status, periodo} = useSelector(state => state.periodos);
  const {statusProgramas, programa } = useSelector(state => state.programas);
  let [periodoid, setPeriodoId]= useState("2024");
  const [showMessage, setShowMessage] = useState(false);
 
  useEffect(() => {
   dispatch(getPeriodosRed('getProgramasPeriodos', token));
  }, [token]);


  function GetStatePrograma(periodoidState){
        dispatch(getProgramasRed('programasVer', periodoidState, token));
  }

  
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

                <div className = 'p-4'>
                    <p className = 'text-lg text-[#8C2037]'>Programas del Bienestar</p>
                </div>

               
            
                <div className="p-4">
                    {status != 'full' ? 
                    <div class="text-center">
                        <div role="status">
                            <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Cargando...</span>
                        </div>
                    </div>
                    : 
                    <span className = 'inline-grid grid-cols-12 gap-4 flex'>
                    {   periodo?.map( ( { periodo_id }, i) => {
                        return <>
                        <button type="button" id = 'buttonPeriodo' class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-periodo = {`${periodo_id}`} 
                            onClick={(buttonEnv) => {
                                    const getElement = buttonEnv.target;
                                    periodoid = getElement.getAttribute("data-periodo");
                                    setPeriodoId(periodoid);
                                    GetStatePrograma(periodoid);

                            }}
                        >{periodo_id}</button>
                            </>
                    })}
                  </span>
                    }
                </div>

                
                <div className = 'bg-white p-4 rounded-lg drop-shadow-2xl'>
                <div class="relative overflow-x-auto">

                    
                        {   statusProgramas != 'full'  ?
                                    null
                            :

                 <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th scope="col" class="px-6 py-3">
                                  Periodo
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  ID. Prog.
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Programa y/o acción
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Vertiente
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Ficha
                              </th>
                              <th scope="col" class="px-6 py-3">
                                  Ver
                              </th>
                          </tr>
                      </thead>
                      <tbody id = 'onGetChanged' data-table1 =''>
                        
                          
                            {   programa?.map( ({periodo_id, clasificgob_desc, nombre_completo, prog_id, prog_desc, prog_verti}, i) => {

                                return  <>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {periodo_id}
                                    </th>
                                    <td class="px-6 py-4">
                                            {prog_id}
                                    </td>
                                    <td class="px-6 py-4">
                                            {prog_desc}
                                    </td>
                                    <td class="px-6 py-4">
                                            {prog_verti}
                                    </td>
                                    <td>
                                        <Link type="button" title="PDF" className = 'flex justify-center' >
                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='15' height='15'>
                                                    <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/>
                                                </svg>
                                            
                                        </Link>
                                    </td>
                                    <td>
                                        <Link type="button" title="eye" className="flex justify-center" to = "fichaglobal" state = {{periodo_id, prog_id}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width='15' height='15'>
                                                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                                                </svg>
                                           
                                        </Link>
                                    </td>

                                    </tr>

                                    </>

                            } ) }
                              
                          
                      </tbody>
                  </table> 
                        
                        }
                </div>
                </div>
            </div>
        </>
        );


}