import React, { useState } from "react";
import { useEffect } from "react";
import CryptoJS from "crypto-js";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../store";
import { PaginationPublic, SearchBar } from "../../../ui/components";
import { pass } from "../../../api";
import useWindowSize from "../../../hooks/useWindowSize";

export const VerificacionList = () => {
 
  const dispatch = useDispatch();
  const size = useWindowSize();
  const { token } = useSelector( state => state.auth );
  const { loading, currentPage, path, consulta, from, to, lastPage, total, links } = useSelector( state => state.consultas );
  const { ejercicio, clasificacion, estructura, criterios } = useSelector( state => state.catalogos );
  const [selectedPeriodo, setSelectedPeriodo] = useState(2024);
  const [selectedClasgob, setSelectedClasgob] = useState(0);
  const [selectedEstrucgob, setSelectedEstrucgob] = useState(0);
  const [selectedCriterio, setSelectedCriterio] = useState('Todas');
  
  useEffect(() => {
      dispatch( getData( currentPage, `/obras/${selectedPeriodo}/${selectedClasgob}/${selectedEstrucgob}/${selectedCriterio}`, token ) );
  }, [token, selectedPeriodo, selectedClasgob, selectedEstrucgob, selectedCriterio]);

return (
  <>
      {/* <SearchBar searchPath="/get-search-users" normalPath="/get-users" /> */}
      <div className={`-mt-1 md:mt-8 mb-6 flex`} style={{justifyContent: "space-between"}}>
      <div className="lg:mt-0 mt-8 grid grid-cols-12 gap-3">

          <div className="md:col-span-2 col-span-6">
          <div className="max-w-sm mx-auto">
          <label htmlFor="ejercicio" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Ejercicio Fiscal:</label>
            <div className="col-sm-8">
            <select id="ejercicio" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-colorPrimario focus:border-colorPrimario block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-colorPrimario dark:focus:border-colorPrimario"
                onChange={(e) => setSelectedPeriodo(e.target.value)}>
                <option value="0">Seleccione un periodo</option>
                {ejercicio?.map((ejer) => (
                  <option key={ejer.periodo_id} value={ejer.periodo_id}>
                    {ejer.periodo_id}
                  </option>
                ))}
              </select>
              </div>  
            </div>            
          </div>

          <div className="md:col-span-3 col-span-6">
          <div className="max-w-sm mx-auto">
          <label htmlFor="clasificacion" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Clasificacion de Gobierno:</label>
            <div className="col-sm-8">
              <select id="clasificacion" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-colorPrimario focus:border-colorPrimario block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-colorPrimario dark:focus:border-colorPrimario"
                onChange={(e) => setSelectedClasgob(e.target.value)}>
                <option value="0">Seleccione una clasificacion</option>
                {clasificacion?.map((clasificaciongob) => (
                  <option key={clasificaciongob.clasificgob_id} value={clasificaciongob.clasificgob_id}>
                    {clasificaciongob.clasificgob_desc}
                  </option>
                ))}
              </select>
            </div>
            </div>
          </div>

          <div className="md:col-span-3 col-span-12">
          <div className="max-w-sm mx-auto">
          <label htmlFor="clasificacion" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Criterios Orientacion Social:</label>
            <div className="col-sm-8">
              <select id="clasificacion" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-colorPrimario focus:border-colorPrimario block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-colorPrimario dark:focus:border-colorPrimario"
                onChange={(e) => setSelectedCriterio(e.target.value)}>
                <option value="0" selected>Seleccione un Criterio</option>
                <option value="Todas">Todas</option>
                <option value="Procesadas">Procesadas</option>
                <option value="Pendientes">Pendientes</option>
              </select>
            </div>
            </div>
          </div>

          <div className="md:col-span-4 col-span-12">
          <div className="max-w-sm mx-auto">
          <label htmlFor="clasificacion" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Estructura de Gobierno:</label>
            <div className="col-sm-8">
              <select id="clasificacion" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-colorPrimario focus:border-colorPrimario block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-colorPrimario dark:focus:border-colorPrimario"
                onChange={(e) => setSelectedEstrucgob(e.target.value)}>
                <option value="0">Seleccione una estructura</option>
                {estructura?.map((estructuragob) => (
                  <option key={estructuragob.estrucgob_id} value={estructuragob.estrucgob_id}>
                    {estructuragob.estrucgob_id} - {estructuragob.estrucgob_desc}
                  </option>
                ))}
              </select>
            </div>
            </div>
          </div>

          </div>
          </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg -mt-2">
          <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-base text-white uppercase bg-colorPrimario">
                  <tr>
                      <th scope="col" className="py-2 px-4 text-xs">
                          Opciones
                      </th>
                      <th scope="col" className="py-2 px-4 text-xs">
                          No.
                      </th>
                      <th scope="col" className="py-2 px-4 text-xs text-nowrap">
                          Ejercicio Fiscal
                      </th>
                      <th scope="col" className="py-2 px-4 text-xs text-nowrap">
                          Obra Id
                      </th>
                      <th scope="col" className="py-2 px-4 text-xs text-nowrap">
                          Nombre de la obra
                      </th>
                      <th scope="col" className="py-2 px-4 text-xs text-nowrap">
                          Clasificación de Gobierno
                      </th>
                      <th scope="col" className="py-2 px-4 text-xs text-nowrap">
                          Estructura de Gobierno
                      </th>
                      <th scope="col" className="py-2 px-4 text-xs text-nowrap">
                          Cobertura
                      </th>
                      <th scope="col" className="py-2 px-4 text-xs text-nowrap">
                          Municipio
                      </th>
                      <th scope="col" className="py-2 px-4 text-xs text-nowrap">
                          Fec. reg. (dd/mm/aaaa)
                      </th>
                      <th scope="col" className="py-2 px-4 text-xs text-nowrap">
                          Criterio Orientación Social
                      </th>
                  </tr>
              </thead>
              <tbody className={`${ loading ? 'hidden' : '' } uppercase text-xs`}>
                  { consulta?.map( ( { id, periodo_id,  obra_id, obra_nom_corto, clasificgob_id, estrucgob_id, cobertura_id, municipio_id, obra_fecreg, criterio_id }, i ) => {
                      return <>
                      <tr key={i} className="bg-gray-50 border-b hover:bg-orange-100 border-colorTerciario                       -700">
                          <th scope="row" className="flex items-center px-4 space-x-3 whitespace-nowrap">
                              <div className="flex items-center">
                                  <div className="flex items-center">
                                      <Link type="button" title="Editar" className="text-fuchsia-400 hover:text-white border-2 border-fuchsia-400 hover:bg-fuchsia-600 focus:ring-2 focus:outline-none focus:ring-fuchsia-200 font-medium rounded-lg text-sm px-1 py-0.5 text-center mr-2 mb-2"
                                              to={`../editar/${ CryptoJS.AES.encrypt( JSON.stringify( id ),pass ).toString().replace(/\+/g,'p1L2u3S').replace(/\//g,'bXaJN0921').replace(/=/g,'e1Q2u3A4l') }`}>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                              <path d="M13.5 6.5l4 4"></path>
                                          </svg>
                                      </Link>
                                  </div>
                              </div>
                          </th>
                          <td className="px-1 text-xs">{ i+1 }</td>
                          <td className="px-1 text-xs">{ periodo_id }</td>
                          <td className="px-1 text-xs">{ obra_id }</td>
                          <td className="px-1 text-xs text-nowrap">{ obra_nom_corto }</td>
                          <td className="px-1 text-xs">{ clasificgob_id }</td>
                          <td className="px-1 text-xs">{ estrucgob_id }</td>
                          <td className="px-1 text-xs">{ cobertura_id }</td>
                          <td className="px-1 text-xs">{ municipio_id }</td>
                          <td className="px-1 text-xs">{ obra_fecreg }</td>
                          <td className="px-1 text-xs">{ criterio_id }</td>
                      </tr>
                      </>
                  })}
              </tbody>
          </table>
          <div className={`${loading ? 'w- h-32' : ''} flex items-center justify-center mt-9`}>
              <div role="status" className={`${ loading ? '' : 'hidden' } absolute opacity-100 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 p-96`}>
                  <svg aria-hidden="true" className="w-20 h-20 mr-2 text-gray-400 animate-spin fill-colorPrimario" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                  <span className="sr-only">Loading...</span>
              </div>
          </div>
      </div>
      { ( links ) ?  <PaginationPublic path={`/obras/${selectedPeriodo}/${selectedClasgob}/${selectedEstrucgob}/${selectedCriterio}`} from={from} to={to} currentPage={currentPage} lastPage={lastPage} total={total} links={links} /> : null }
  </>
)

};
