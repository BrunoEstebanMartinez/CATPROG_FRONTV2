import { useEffect } from "react";
import CryptoJS from "crypto-js";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../store";
import { PaginationPublic, SearchBar } from "../../../ui/components";
import { pass } from "../../../api";



export const ListaFunciones = () => {

    const dispatch = useDispatch();

    const { token } = useSelector( state => state.auth );
    const { loading, currentPage, path, consulta, from, to, lastPage, total, links } = useSelector( state => state.consultas );
    
    useEffect(() => {
        dispatch( getData( currentPage, '', token ) );
    }, [token]);

  return (
    <>
        <SearchBar newPath="" searchPath="/get-search-users" normalPath="/get-users" />
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-base text-white uppercase bg-colorPrimario">
                    <tr>
                        <th scope="col" className="py-1 px-1 text-center">
                            Acciones
                        </th>
                        <th scope="col" className="py-1 px-1 text-center">
                            Proceso
                        </th>
                        <th scope="col" className="py-1 px-1 text-center">
                            Id. Func.
                        </th>
                        <th scope="col" className="py-1 px-1 text-center">
                            Función del Proceso
                        </th>
                        <th scope="col" className="py-1 px-1 text-center">
                            Activa / Inactiva
                        </th>
                        <th scope="col" className="py-1 px-1 text-center">
                            Fecha registro
                        </th>
                    </tr>
                </thead>
                <tbody className={`${ loading ? 'hidden' : '' } uppercase text-xs`}>
                    { consulta?.map( ( { rn, proceso_id, proceso_desc, funcion_id, funcion_desc, funcion_status, funcion_fecreg  }, i ) => {
                        return <>
                        <tr key={i} className="bg-gray-50 border-b hover:bg-orange-100 border-colorTerciario                       -700">
                        <th scope="row" className="flex justify-center py-1 px-1 space-x-3 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <Link type="button" data-title="Editar" className="text-blue-500 hover:text-white border-2 border-blue-500 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-fuchsia-200 font-medium rounded-lg text-sm px-1 py-0.5 text-center mr-2"
                                                to={`../editar/${ CryptoJS.AES.encrypt( JSON.stringify( proceso_id ),pass ).toString().replace(/\+/g,'p1L2u3S').replace(/\//g,'bXaJN0921').replace(/=/g,'e1Q2u3A4l') }`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                                <path d="M13.5 6.5l4 4"></path>
                                            </svg>
                                        </Link>
                                        <Link type="button" data-title="Eliminar" className="text-colorAuxiliar hover:text-white border-2 border-colorAuxiliar hover:bg-colorPrimario focus:ring-2 focus:outline-none focus:ring-fuchsia-200 font-medium rounded-lg text-sm px-1 py-0.5 text-center mr-2"
                                                to={`../editar/${ CryptoJS.AES.encrypt( JSON.stringify( proceso_id ),pass ).toString().replace(/\+/g,'p1L2u3S').replace(/\//g,'bXaJN0921').replace(/=/g,'e1Q2u3A4l') }`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </th>
                            {/* <td className="py-1 px-1 text-center">{ proceso_id }</td> */}
                            <td className="py-1 px-1 text-center">{ proceso_desc }</td>
                            <td className="py-1 px-1 text-center">{ funcion_id }</td>
                            <td className="py-1 px-1 text-center">{ funcion_desc }</td>
                            {/* <td className="py-1 px-4">{ funcion_status }</td> */}
                            <td className="py-1 px-1 justify-items-center">
                                { 
                                    funcion_status == 'S' ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-emerald-500" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg> : 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle-fill text-red-500" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                        </svg> 
                                }
                            </td>
                            <td className="py-1 px-1 text-center">{ funcion_fecreg }</td>
                            {/* <td className="py-1 px-4">{ (status == 1) ? 'ACTIVO' : 'DESACTIVADO' }</td> */}
                        </tr>
                        </>
                    })}
                </tbody>
            </table>
            <div className={`${loading ? 'w- h-32' : ''} flex items-center justify-center mt-9`}>
                <div role="status" className={`${ loading ? '' : 'hidden' } absolute opacity-100 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 p-96`}>
                    <svg aria-hidden="true" className="w-28 h-28 mr-2 text-gray-400 animate-spin fill-colorPrimario" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
        { ( links ) ?  <PaginationPublic path={path} from={from} to={to} currentPage={currentPage} lastPage={lastPage} total={total} links={links} /> : null }
    </>
  )
}
