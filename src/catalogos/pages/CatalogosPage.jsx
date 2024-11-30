import { Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom"
import { ListaProcesos } from "../components/catalogos/listaProcesos"
import { ListaFunciones } from "../components/catalogos/listaFunciones"
import { ListaActividades } from "../components/catalogos/listaActividades"
import { FormProcesos } from "../components/catalogos/FormProcesos"


export const CatalogosPage = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <div className="px-1 sm:px-2 lg:px-2 py-3 w-full max-w-9xl mx-auto">
        <div className="bg-white p-4 shadow-2xl">
          <div className="flex justify-between items-center pb-0">
          <h1 className="felx pb-0 text-3xl font-extrabold text-colorPrimario">Administración de<small className="ml-2 font-semibold text-gray-500">catálogos</small></h1> 
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <NavLink
                      end
                      to="/catalogo/catalogos/listaprocesos"
                      className={({ isActive }) =>
                      'block transition duration-150 truncate ' + (isActive || pathname.includes('listaprocesos') || pathname.includes('nuevoproceso') ? 'text-colorPrimario' : 'text-slate-400 hover:text-slate-600')}>
                        <span className="ml-2 inline-flex items-center text-sm font-medium">
                          Procesos
                        </span>
                    </NavLink>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                      <NavLink
                        end
                        to="/catalogo/catalogos/listafunciones"
                        className={({ isActive }) =>
                        'block transition duration-150 truncate ' + (isActive ? 'text-colorPrimario' : 'text-slate-400 hover:text-slate-600')}>
                          <span className="ml-2 inline-flex items-center text-sm font-medium">
                            Funciones de Procesos
                          </span>
                      </NavLink>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                      <NavLink
                        end
                        to="/catalogo/catalogos/listaactividades"
                        className={({ isActive }) =>
                        'block transition duration-150 truncate ' + (isActive ? 'text-colorPrimario' : 'text-slate-400 hover:text-slate-600')}>
                          <span className="ml-2 inline-flex items-center text-sm font-medium">
                            Actividades
                          </span>
                      </NavLink>
                    </div>
                  </li>
                </ol>
              </nav>
          </div>
          <div className="p-4">
            <Routes>
              <Route path="listaprocesos" element={ <ListaProcesos />} />
              <Route path="listafunciones" element={ <ListaFunciones />} />
              <Route path="listaactividades" element={ <ListaActividades />} />
              <Route path="nuevoproceso/:id" element={ <FormProcesos />} />

              <Route path="/*" element= { <Navigate to={"lista"}/> } />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
